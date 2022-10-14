import { useEffect, useState } from 'react'

// components
import VehicleDetails from '../components/VehicleDetails'
import VehicleForm from '../components/VehicleForm'

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
                    <VehicleDetails key={vehicle._id} vehicle={vehicle} />
                ))}
            </div>
            <VehicleForm />
        </div>
    )
}

export default Home