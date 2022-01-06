//this contact.js includes my contact details.

//import layout from components.
import Layout from "../components/Layout";

//display layout and contact details with styling.
const Contact = () => (
  <div>
    <Layout />
    <div>
      <br/>
      <br/>
      <img src="/static/blog.jpg" alt="portfoliopic" />
    </div>
    <br/>
    <div className='one'>
      <h1>Contact Me:</h1>
      <small>Email- ashleighjadewilliams5@gmail.com </small>
      <br/>
      <br/>
      <small>Phone- 084 622 1956 </small>
    </div>
        <style jsx>{`
        img {
            width: 300px;
            height: 340px;
            float: left;
        }
        h1 {
          font-family: 'DM Serif Display', serif;
          font-size: 4rem;
          text-align: center;
          padding: 4rem 0 2rem 0;
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

//export this code to make it available outside of this module.
export default Contact;
