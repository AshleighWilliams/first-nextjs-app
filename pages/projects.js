//this project.js file includes projects I have completed.

//import layout from components.
import Layout from "../components/Layout";
//import link from next folder.
import Link from 'next/link';

//display layout and my projects with links to it and styling of this page.
const Project = () => (
    <div>
        <Layout />
        <div className='one'>
                <h1>My Projects:</h1>
        </div>
        <br/>
        <div className="row">
            <div className="two columns main-col">
            <a href="https://itunessearchwithapi.herokuapp.com/">
                <img className='image' src="/static/itunes.jpg" alt="itunesapp" />
                An iTunes Search Api Created Using React.js and Express
            </a>
            <hr/>
            <div className="two columns main-col">
            <a href="https://ancient-sands-62481.herokuapp.com">
                <img className='image' src="/static/game.jpg" alt="game" />
                A Memory Card Game Created Using React.js
            </a> 
            <hr/>
            <div className="two columns main-col">
            <a href="https://appointment-app-for-doctors.herokuapp.com/">
                <img className='image' src="/static/appointment.jpg" alt="appointment" />
                An Appointment App for Doctor's Created Using MERN Stack
            </a>      
            </div>     
            </div>
            </div>
        </div>
        <hr/>
        <h6>View more of my projects at: 
            <br/>
            <Link href="https://github.com/AshleighWilliams?tab=repositories"> 
            <a> GitHub </a>
             </Link>
        </h6>

        <style jsx> {`
        .image {
            width: 400px;
            height: 200px;s
        }
        h1 {
            font-family: 'DM Serif Display', serif;
            color: white;
            text-align: center;
            padding: 3rem 0 2rem 0;
        }
        .one {
            background-color: black;
        }
        div {
            margin: 0 auto;
        }
        h6 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
            color: black;
        }
        a {
            text-decoration: none;
            color: gray;
        }
        a :hover {
            text-decoration: none;
        }
        `}
        </style>

    </div>
)

//export this code to make it available outside of this module.
export default Project;
