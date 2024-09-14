

export default function Navbar({ links }) {
    return (
        <nav className='d-flex align-items-center navbar navbar-expand-lg'>
            <ul className="navbar-nav">
                {links.map((link) => link)}
            </ul>
        </nav>
    );
};