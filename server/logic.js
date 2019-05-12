

function ticketFraude(ticket, tickets) {
    let fraudeRisk = 0

    // const comments = ticket.comments

    // const time = ticket.createdAt
    // const timestring = JSON.stringify(time)
    // const hour = timestring.slice(12, 14)

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
    console.log('tickets', tickets)
    const ticketPriceArrayThisEvent = tickets.map(ticket => { return ticket.price })
    const sum = ticketPriceArrayThisEvent.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const average = sum / ticketPriceArrayThisEvent.length
    const percentageCheaper = ticket.price / average
    const percentageExpensive = ticket.price / average - 1

    if (ticket.price < average) {
        fraudeRisk += percentageCheaper
    } else if (ticket.price > average) {
        if (percentageExpensive > 0.1) {
            fraudeRisk -= 10
        } else {
            fraudeRisk -= percentageExpensive
        }
    }

    // if (comments.length > 2) {
    //     fraudeRisk += 5
    // }
    // if (hour > 8 && hour < 17) {
    //     fraudeRisk -= 10
    // } else {
    //     fraudeRisk += 10
    // }
    if (userIdMatch === 1) {
        fraudeRisk += 10
    }
    // if (fraudeRisk < 5) {
    //     fraudeRisk = 5
    // } else if (fraudeRisk > 95) {
    //     fraudeRisk = 95
    // }
    let fraude = Math.round(fraudeRisk * 100) / 100

    return fraude
}


module.exports = ticketFraude
