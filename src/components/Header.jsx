import Navigation from './Navigation';
import './Header.css'

export default function Header() {
    return (
        <header className='px-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Aaron Richter</h1>
                <Navigation />
            </div>
        </header>
    );
};