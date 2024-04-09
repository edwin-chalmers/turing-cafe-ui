import './Reservations.css'

import Card from '../Card/Card'

export default function Reservations({ reservations }) {

    let cards = reservations.map(reservation => {
        return <Card 
            key={reservation.id} 
            id={reservation.id} 
            name={reservation.name} 
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
        />
    })

    return (
        <div className='Reservations'>
            {cards}
        </div>
    )
}