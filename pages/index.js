//this index.js file acts as the homepage.

//import layout from components.
import Layout from '../components/Layout.js';

//import layout for homepage with a title, gif and images with links with styling of all of this.
const Home = () => (
    <div>
        <Layout />
        <div>
        <img className='webdev' src="/static/69723-web-developer.gif" alt="webdev" background="transparent" speed="1" loop autoplay />
        </div>
        <br/>
        <div className='one'>
        <h1>Hi, I'm Ashleigh Williams!</h1>
        <small>// An Aspiring Web Developer  </small>
        <br/>
        <br/>
        <small> 
        <a href="https://www.linkedin.com/in/ashleigh-williams-07b54b203/">
            <img className='images' src="/static/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/AshleighWilliams">
            <img className='images' src="/static/github.png" alt="github" />
        </a>
        <a href="https://webdevash.blogspot.com/">
            <img className='images' src="/static/blog.png" alt="blog" />
        </a>
        </small>
        </div>
        <style jsx>{`
        .images {
            width: 40px;
            height: 40px;
        }
        .webdev {
            width: 450px;
            height: 480px;
            float: right;
        }
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
            padding: 4rem;
            color: white;
        }
        .one {
            background-color: black;
        }
        `}
        </style>

    </div>
)

//export the code to make it available outside of this module.
export default Home;
