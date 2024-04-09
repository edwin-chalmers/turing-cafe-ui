import './Form.css'
import { useState } from 'react'

export default function Form({ addRes }) {
    const [newRes, setNewRes] = useState({id: Date.now()})

    function submitRes(e) {
        e.preventDefault()
        addRes(newRes)
        clearInput()
    }

    function clearInput() {
        setNewRes({
            id: Date.now(),
            name: "",
            date: "",
            time: "",
            numGuests: ""
        })
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setNewRes(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form className='Form'>
            <input value={newRes.name} onChange={handleInputChange} type="text" id="name" name="name" placeholder="Name"/>
            <input value={newRes.date} onChange={handleInputChange} type="text" id="date" name="date" placeholder="Date (mm/dd)"/>
            <input value={newRes.time} onChange={handleInputChange} type="text" id="time" name="time" placeholder="Time"/>
            <input value={newRes.number} onChange={handleInputChange} type="text" id="number" name="number" placeholder="Number of Guests"/>
            <button onClick={submitRes} className='make-reservation'>Make Reservation</button>
        </form>
    )
}