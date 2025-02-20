import './About.css'
import meImage from '../assets/images/my-photo-image.jpg'

export default function About() {
    return (
        <div>
            <h2>
                About Me
            </h2>
            <img className="about-photo" src={meImage} alt="My Photo"/>
            <p>
                Hello and welcome to my virtual portfolio. My name is Aaron Richter and I am an aspiring software developer. I am a recent graduate 
                of a six month software development bootcamp put on through the University of Minnesota. I have
                been trained in both the front-end as well as the back-end of software development. For the front-end I have a basic knowledge 
                of HTML, CSS, and JavaScript and have also learned about responsive design and CSS frameworks like Bootstrap and Bulma. For the back-end
                I have been taught about Node and Express.js for creating web and server side applications. I've also learned about database options 
                like SQL using PostgreSQL with Sequelize and noSQL using MongoDB with Mongoose.
            </p>
            <p>
                If you would like to see examples of my work you can go to my portfolio page where I have several examples of projects I've worked
                on either by myself or in a group. If you would like to see my resume you can go to the resume page where you will see a list of my 
                proficiencies and find a downloadable copy of my resume. If you would like to contact me you send an email to anrichter2@gmail.com.
                Lastly I have clickable links to my linkedIn profile, GitHub profile, and medium profile in the footer.
            </p>
        </div>
    );
};