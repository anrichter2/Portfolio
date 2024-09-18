

export default function Navbar({ links }) {
    return (
        <nav className='d-flex align-items-center navbar navbar-expand-sm'>
            <ul className="navbar-nav">
                {links.map((link) => link)}
            </ul>
        </nav>
    );
};