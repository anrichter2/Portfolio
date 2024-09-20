import Navigation from './Navigation';
import './Header.css'

export default function Header() {
    return (
        <header className='px-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>anrichter2</h1>
                <Navigation />
            </div>
        </header>
    );
};