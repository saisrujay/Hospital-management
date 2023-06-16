import './Home.css'
import {Link} from "react-router-dom";
export default function Register() {
    return (
        <div className='home'>
            <div className="button">
                <button className="b1">  
                <Link to="/login">Existing User</Link>
                 </button>
                <button className="b1">New User</button>
            </div>
        </div>
    )
}