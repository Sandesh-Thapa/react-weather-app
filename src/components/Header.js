import React, { useState } from 'react'

function Header({submitCity}) {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    submitCity(city)
    setCity('')
  }


  return (
    <div className="bg-dark text-center text-white py-3">
      <h3 className="mb-3">Weather App</h3>
      <form onSubmit={handleSubmit}>
        <input className="br-5" type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      </form>
    </div>
  )
}

export default Header