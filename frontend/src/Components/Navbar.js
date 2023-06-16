import Logo from "../Images/Logo.webp"
import './Navbar.css'

export default function Register() {
    return (
        <nav className='nav'>
            <img className='logo' src={Logo} alt="Airbnb Logo" />
            <h3>Universal Health Management System</h3>
        </nav>
    )
}