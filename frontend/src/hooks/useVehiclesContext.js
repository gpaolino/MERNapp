import { VehiclesContext } from "../context/VehicleContext";
import { useContext } from "react";

export const useVehiclesContext = () => {
    const context = useContext(VehiclesContext)

    if (!context) {
        throw Error('useVehicleContext must be used  inside an VehicleContextProvider')
    }

    return context
}