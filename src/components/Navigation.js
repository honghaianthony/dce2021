import {Link} from 'react-router-dom'

function Navigation () {
    return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="users">Users</Link>
            </li>
        </ul>
        </>
    )
}

export default Navigation;