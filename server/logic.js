

function ticketFraude(ticket, tickets) {

    // function ticketF(ticket) {
    let fraudeRisk = 0

    const comments = ticket.comments
    console.log('comments', comments)

    const time = ticket.createdAt
    const timestring = JSON.stringify(time)
    const hour = timestring.slice(12, 14)

    if (comments.length > 2) {
        fraudeRisk += 5
    }
    if (hour > 8 && hour < 17) {
        fraudeRisk -= 10
    } else {
        fraudeRisk += 10
    }
    if (fraudeRisk < 5) {
        fraudeRisk = 5
    } else if (fraudeRisk > 95) {
        fraudeRisk = 95
    }

    return fraudeRisk
}

// function ticketF2(tickets) {

//     let fraudeRisk2 = 0

//     const ticketPriceArray = tickets.map(ticket => { return ticket.price })
//     const ticketUserIdArray = tickets.map(ticket => { return ticket.userId })
//     const userId = (arr) => {
//         let countUserId = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (ticket.userId === arr[i]) {
//                 countUserId++
//             }
//         }
//         return countUserId
//     }
//     const userIdMatch = userId(ticketUserIdArray)

//     const sum = ticketPriceArray.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     }, 0);
//     const average = sum / ticketPriceArray.length
//     const percentageCheaper = ticket.price / average
//     const percentageExpensive = ticket.price / average - 1

//     if (ticket.price < average) {
//         fraudeRisk += percentageCheaper
//     } else if (ticket.price > average) {
//         fraudeRisk -= Math.max(10, percentageExpensive)

//         if (userIdMatch === 1) {
//             fraudeRisk += 10
//         }

//     }
//     return fraudeRisk2

// }
// ticketF(ticket)
// ticketF2(tickets)
// }

module.exports = ticketFraude


