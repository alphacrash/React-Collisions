import { Link } from "react-router-dom"

const ListCrash = ({ list, setCrashDetails }) => {
    const renderList = list.map((crash) => {
        const crash_date = new Date(crash.crash_date).toDateString()
        return (
            <div
                key={crash.collision_id}
                className="card"
                onClick={() => { setCrashDetails(crash) }} >
                <div className="content">
                    <div className="header">{crash.collision_id}</div>
                    <div className="meta">
                        {crash_date} | {crash.crash_time}
                    </div>
                    <div className="description">
                        <p>{crash.vehicle_type_code1}</p>
                        {crash.on_street_name &&
                            <p>Location: {crash.on_street_name} </p>
                        }
                    </div>

                </div>
                <div className="extra content">
                    <span class="right floated star">
                        <i class="chevron right blue icon"></i>
                        <Link to="/details">View Details</Link>
                    </span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h2 className="ui header">
                <i className="list icon"></i>
                <div className="content">
                    List of Collisions
                </div>
            </h2>
            <div class="ui hidden divider"></div>
            <div className="ui cards">
                {renderList}
            </div>
            <div class="ui hidden divider"></div>
        </div>
    )
}

export default ListCrash