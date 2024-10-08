import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
    return (
        <Navbar
            links={[
                <Link key={1} className='nav-link' to={"/"}> 
                    About Me
                </Link>,
                <Link key={2} className='nav-link' to={"/Portfolio"}>
                    Portfolio
                </Link>,
                <Link key={3} className='nav-link' to={"/Contact"}>
                    Contact
                </Link>,
                <Link key={4} className='nav-link' to={"/Resume"}>
                    Resume
                </Link>,
            ]}
        />
    )
}