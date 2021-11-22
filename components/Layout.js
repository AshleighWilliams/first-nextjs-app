//layout.js incldes the header and layout.

//import header from components.
import Header from './Header';
//import head from next for a navbar.
import Head from 'next/head';

//dispkay layout and header on all pages.
const Layout = ({ children }) => {
    return (
    <div className="content">
        <Head>
        <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
        </Head>
        <Header />
            { children }

        <style jsx> {`
        `}</style>

    </div>
    );
}

//export this code to make it available outside of this module.
export default Layout;