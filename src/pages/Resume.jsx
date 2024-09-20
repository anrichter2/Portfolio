import pdf from '../assets/Aaron-Richter-Resume-2024.pdf'

export default function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <p>
                Download my resume <a href={pdf} download={'Aaron Richter Resume'}>Here</a>
            </p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>React</li>
                <li>Handlebars</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>API's</li>
                <li>SQL</li>
                <li>PostgreSQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
        </div>
    );
};