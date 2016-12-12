/**
 * Created by MARK-Max on 3.11.2016 г..
 */
function sortedTicket(ticketData,sortingCriteria){
    class Ticket {
        constructor(destination,price,status){
            this.destination=destination;
            this.price = price;
            this.status= status;
        }

        static sort (tickets,criteria){
            switch (criteria){
                case 'destination':
                    return tickets.sort((a,b)=>a.destination.localeCompare(b.destination))
                case 'price':
                    return tickets.sort((a,b)=>a.price-b.price);
                case 'status':
                    return tickets.sort((a,b)=>a.status.localeCompare(b.status))
            }
        }
    }
    return Ticket.sort(ticketData
        .map(ticketData=>{
            ticketData=ticketData.split(/\|/);
    return new Ticket(ticketData[0],Number(ticketData[1]),ticketData[2])
        }),sortingCriteria);
}
let test = new sortedTicket(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
console.dir(test);