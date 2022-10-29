import { useEffect } from 'react'
import { useVehiclesContext } from '../hooks/useVehiclesContext'

// components
import VehicleDetails from '../components/VehicleDetails'
import VehicleForm from '../components/VehicleForm'

const Home = () => {
    const {vehicles, dispatch} = useVehiclesContext()

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('/api/vehicles')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_VEHICLES', payload: json})
            }
        }

        fetchVehicles()
    }, [dispatch])

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