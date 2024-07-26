import { Link } from 'react-router-dom';
function Navigation(){
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/db">Profile</Link>
        </>
    )
}
export default Navigation;