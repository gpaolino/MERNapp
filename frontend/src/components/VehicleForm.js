import { useState } from "react"
import { useVehiclesContext } from '../hooks/useVehiclesContext'

const VehicleForm = () => {
    const { dispatch } = useVehiclesContext()

    const [vehicle_type, setVehicleType] = useState('')
    const [maker, setMaker] = useState('')
    const [model, setModel] = useState('')
    const [registration_year, setRegistrationYear] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()

        const vehicle = {vehicle_type, maker, model, registration_year}

        const response = await fetch('/api/vehicles', {
            method: 'POST',
            body: JSON.stringify(vehicle),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setVehicleType('')
            setMaker('')
            setModel('')
            setRegistrationYear('')
            setError(null)
            setEmptyFields([])
            console.log('new vehicle added', json)
            dispatch({type: 'CREATE_VEHICLE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Vehicle</h3>

            <label>Vehicle Type:
            <input
                type="text"
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicle_type}
                className={emptyFields.includes('vehicle_type') ? 'error' : ''}
            /></label>

            <label>Maker:
            <input
                type="text"
                onChange={(e) => setMaker(e.target.value)}
                value={maker}
                className={emptyFields.includes('maker') ? 'error' : ''}
            /></label>

            <label>Model:
            <input
                type="text"
                onChange={(e) => setModel(e.target.value)}
                value={model}
                className={emptyFields.includes('model') ? 'error' : ''}
            /></label>

            <label>Registration Year:
            <input
                type="text"
                onChange={(e) => setRegistrationYear(e.target.value)}
                value={registration_year}
                className={emptyFields.includes('registration_year') ? 'error' : ''}
            /></label>

            <button type="submit">Add Vehicle</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default VehicleForm