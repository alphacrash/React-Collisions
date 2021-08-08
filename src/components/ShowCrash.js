const ShowCrash = ({ data }) => {
    if (!data) {
        return (
            <div>
                Please select a valid crash
            </div>
        )
    }
    return (
        <div>
            <li>crash_date: {data.crash_date}</li>
            <li>crash_time: {data.crash_time}</li>
            <li>on_street_name: {data.on_street_name}</li>
            <li>number_of_persons_injured: {data.number_of_persons_injured}</li>
            <li>number_of_persons_killed: {data.number_of_persons_killed}</li>
            <li>number_of_pedestrians_injured: {data.number_of_pedestrians_injured}</li>
            <li>number_of_pedestrians_killed: {data.number_of_pedestrians_killed}</li>
            <li>number_of_cyclist_injured: {data.number_of_cyclist_injured}</li>
            <li>number_of_cyclist_killed: {data.number_of_cyclist_killed}</li>
            <li>number_of_motorist_injured: {data.number_of_motorist_injured}</li>
            <li>number_of_motorist_killed: {data.number_of_motorist_killed}</li>
            <li>contributing_factor_vehicle_1: {data.contributing_factor_vehicle_1}</li>
            <li>contributing_factor_vehicle_2: {data.contributing_factor_vehicle_2}</li>
            <li>collision_id: {data.collision_id}</li>
            <li>vehicle_type_code1: {data.vehicle_type_code1}</li>
            <li>vehicle_type_code2: {data.vehicle_type_code2}</li>
        </div>
    )
}

export default ShowCrash