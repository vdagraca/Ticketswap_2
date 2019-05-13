

function ticketFraude(ticket, tickets) {
    let fraudeRisk = 0

    const comments = ticket.comments

    const time = ticket.createdAt
    const timestring = JSON.stringify(time)
    const hour = timestring.slice(12, 14)

    const ticketUserIdArray = tickets.map(ticket => { return ticket.userId })
    const userId = (arr) => {
        let countUserId = 0
        for (let i = 0; i < arr.length; i++) {
            if (ticket.userId === arr[i]) {
                countUserId++
            }
        }
        return countUserId
    }
    const userIdMatch = userId(ticketUserIdArray)
    const ticketPriceArrayThisEvent = tickets.filter(
        eventticket => { return eventticket.eventId === ticket.eventId }).map(ticket => { return ticket.price })
    const sum = ticketPriceArrayThisEvent.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const average = sum / ticketPriceArrayThisEvent.length
    const percentageCheaper = 100 - (ticket.price * 100) / average
    const percentageExpensive = ((ticket.price * 100) / average) - 100

    console.log('percentageCheaper', percentageCheaper)
    console.log('percentageExpensive', percentageExpensive)
    console.log('start, frauderisk:', fraudeRisk)

    if (ticket.price < average) {
        fraudeRisk += percentageCheaper
    } else if (ticket.price > average) {
        if (percentageExpensive > 10) {
            fraudeRisk -= 10
        } else {
            fraudeRisk -= percentageExpensive
        }
    }
    console.log('compared avarage price, <average + verschil, >averega - verschil, frauderisk:', fraudeRisk)

    if (comments.length > 3) {
        fraudeRisk += 5
    }
    console.log('comments>3 +5, frauderisk:', fraudeRisk)

    if (hour > 8 && hour < 17) {
        fraudeRisk -= 10
    } else {
        fraudeRisk += 10
    }
    console.log('time added, -10 spits,else +10, frauderisk:', fraudeRisk)

    if (userIdMatch === 1) {
        fraudeRisk += 10
    }
    console.log('1 ticket per user +10, frauderisk:', fraudeRisk)
    if (fraudeRisk < 5) {
        fraudeRisk = 5
    } else if (fraudeRisk > 95) {
        fraudeRisk = 95
    }

    console.log('min 5%, max 95%, frauderisk:', fraudeRisk)

    let fraude = Math.round(fraudeRisk * 1) / 1

    return fraude
}


module.exports = ticketFraude
