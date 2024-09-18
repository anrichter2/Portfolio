import { validateEmail } from "../utils/helpers";
import { useState } from "react";
import './Contact.css'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('email address is invalid or blank');
            return;
        };

        if (!name || !message) {
            setErrorMessage('Name or message can not be left blank');
            return
        };

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('')
    };

    return (
        <div className="container-fluid">
            <h2>Contact Me</h2>
            <form className="column" onSubmit={handleFormSubmit}>
                <label className="form-label d-block col-sm-6">
                    Name:
                    <input
                        className="form-control"
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        // required
                    />
                </label>
                <label className="form-label d-block col-sm-6">
                    Email:
                    <input
                        className="form-control"
                        value={email}
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                    />
                </label>
                <label className="form-label d-block col-sm-6">
                    Message:
                    <textarea
                        className="form-control"
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                    />
                </label>
                <div>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};