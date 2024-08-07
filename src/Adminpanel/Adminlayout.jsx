import { Outlet } from "react-router-dom"
import EmployersDashboard from "./EmployersDashboard"

const Adminlayout = () => {
    return (
        <div className="d-flex">
            <div className="col-auto">
                <EmployersDashboard />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )

}

export default Adminlayout