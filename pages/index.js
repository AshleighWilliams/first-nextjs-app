//this index.js file acts as the homepage.

//import layout from components.
import Layout from '../components/Layout.js'; 

//import layout for homepage with a title and styling of this title.
const Home = () => (
    <div>
        <Layout />
        <h1>Hi, I'm Ashleigh Williams!</h1>
        <small>// An Aspiring Web Developer  </small>
        
        <style jsx>{`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 5rem;
            text-align: center;
            padding-top: 8rem;
            color: white;
        }
        small {
            font-family: 'DM Serif Display', serif;
            font-size: 2rem;
            text-align: center;
            margin-left: 510px;
            padding: 4rem;
            color: white;
        }
        div {
            background-color: black;
        }
        `}
        </style>

    </div>
)

//export the code to make it available outside of this module.
export default Home;