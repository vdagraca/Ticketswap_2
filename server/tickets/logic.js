
function ticketFraude(ticket) {
    let fraude = 0

    const time = ticket.createdAt
    console.log('time', time)
    // const hour = time.slice(1, 3)
    console.log('time type', typeof time)
    const timestring = JSON.stringify(time)
    console.log('timestring', timestring)
    const hour = timestring.slice(12, 14)
    console.log('hour', hour)

    function timeTicket() {
        if (hour > 8 && hour < 17) { return fraude -= 10 } else { return fraude += 10 }
    }
    timeTicket()
    return fraude


}

module.exports = ticketFraude

// fraudeCalculation = () => {


//     const tickets = this.props.tickets
//     const ticket = this.props.ticket
//     const comments = this.props.comments
//     let fraudeRisk = this.state.fraude


//     const ticketPriceArray = tickets.map(ticket => { return ticket.price })
//     const ticketUserIdArray = tickets.map(ticket => { return ticket.userId })

//     Math.min(5, fraudeRisk)
//     Math.max(95, fraudeRisk)

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
//     console.log('percentageExpensive', percentageExpensive)

//     if (comments.length > 2) {
//         fraudeRisk += 5
//     }
//     if (userIdMatch === 1) {
//         fraudeRisk += 10
//     }
//     if (ticket.price < average) {
//         // console.log('frauderisk', fraudeRisk + percentageCheaper)
//         fraudeRisk += percentageCheaper
//     } else if (ticket.price > average) {
//         fraudeRisk -= Math.max(10, percentageExpensive)
//     }

//     this.setState({
//         fraude: fraudeRisk
//     })
// }