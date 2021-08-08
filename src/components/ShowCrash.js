import { Link } from "react-router-dom"

const ShowCrash = ({ data }) => {
    if (!data) {
        return (
            <div>
                Please select a valid crash
            </div>
        )
    }
    return (
        <div className="ui segment">
            <h2 className="ui header">
                <i className="road icon"></i>
                <div className="content">
                    Collision ID: {data.collision_id}
                    <div className="sub header">
                        {new Date(data.crash_date).toDateString()} | {data.crash_time}
                    </div>
                </div>
            </h2>
            <h3 className="ui header right">
                <i className="location arrow icon"></i>
                {data.on_street_name}
            </h3>
            <div className="content">
                <div className="ui centered grid">
                    <div className="four column row">
                        <div className="left floated column">
                            <h5>
                                <i className="car icon"></i>
                                Vehicles
                            </h5>
                            <ul className="ui list">
                                <li>
                                    Primary: {data.vehicle_type_code1}
                                </li>
                                <li>
                                    Secondary
                                    : {data.vehicle_type_code2}
                                </li>
                            </ul>
                        </div>
                        <div className="right floated column">
                            <h5>Contributing Factors</h5>
                            <ul className="ui list">
                                <li>{data.contributing_factor_vehicle_1}</li>
                                <li>{data.contributing_factor_vehicle_2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <table className="ui celled structured table center aligned">
                    <thead>
                        <tr>
                            <th colSpan="4">Injured</th>
                            <th colSpan="4">Killed</th>
                        </tr>
                        <tr>
                            <th>Persons</th>
                            <th>Pedestrians</th>
                            <th>Cyclist</th>
                            <th>Motorist</th>
                            <th>Persons</th>
                            <th>Pedestrians</th>
                            <th>Cyclist</th>
                            <th>Motorist</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.number_of_persons_injured}</td>
                            <td>{data.number_of_pedestrians_injured}</td>
                            <td>{data.number_of_cyclist_injured}</td>
                            <td>{data.number_of_motorist_injured}</td>
                            <td>{data.number_of_persons_killed}</td>
                            <td>{data.number_of_pedestrians_killed}</td>
                            <td>{data.number_of_cyclist_killed}</td>
                            <td>{data.number_of_motorist_killed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="ui divider"></div>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default ShowCrash