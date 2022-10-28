import { useVehiclesContext } from '../hooks/useVehiclesContext'

const VehicleDetails = ({ vehicle }) => {
    const { dispatch } = useVehiclesContext()

    const handleClick = async () => {
        const response = await fetch('/api/vehicles/' + vehicle._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_VEHICLE', payload: json})
        }
    }

    return (
        <div className="vehicle-details">
            <h4>{vehicle.vehicle_type}</h4>
            <p><strong>Maker: </strong>{vehicle.maker}</p>
            <p><strong>Model: </strong>{vehicle.model}</p>
            <p>{vehicle.createdAt}</p>
            <span className = "material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default VehicleDetails