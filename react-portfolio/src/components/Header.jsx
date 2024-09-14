import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <div className='d-flex justify-content-between'>
                <h1>anrichter2</h1>
                <Navigation />
            </div>
        </header>
    );
};