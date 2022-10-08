import { useEffect, useState } from 'react'

const Home = () => {
    const [vehicles, setVehicles] = useState(null)

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('/api/vehicles')
            const json = await response.json()

            if (response.ok) {
                setVehicles(json)
            }
        }

        fetchVehicles()
    }, [])

    return (
        <div className="home">
            <div className="vehicles">
                {vehicles && vehicles.map((vehicle) => (
                    <p key={vehicle._id}>{vehicle.license_plate}</p>
                ))}
            </div>
        </div>
    )
}

export default Home