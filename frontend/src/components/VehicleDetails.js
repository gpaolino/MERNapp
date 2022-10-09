const VehicleDetails = ({ vehicle }) => {
    return (
        <div className="vehicle-details">
            <h4>{vehicle.vehicle_type}</h4>
            <p><strong>Maker: </strong>{vehicle.maker}</p>
            <p><strong>Model: </strong>{vehicle.model}</p>
            <p>{vehicle.createdAt}</p>
        </div>
    )
}

export default VehicleDetails