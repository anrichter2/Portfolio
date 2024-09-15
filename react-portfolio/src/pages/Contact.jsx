import { validateEmail } from "../utils/helpers";
import { useState } from "react";

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
            setMessage(inputType);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('email address is invalid or blank');
            return;
        };

        if (!name || !message) {
            setErrorMessage('Name or message field is blank');
            return
        };

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('')
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Name
                    <input
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        // required
                    />
                </label>
                <label>
                    Email
                    <input
                        value={email}
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Message
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
};