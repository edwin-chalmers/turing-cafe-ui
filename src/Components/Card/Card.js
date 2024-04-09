import './Card.css'

export default function Card({ id,name,date,time,number }) {
    return (
        <div className='Card'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
        </div>
    )
}