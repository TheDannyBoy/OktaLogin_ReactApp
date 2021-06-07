import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Home() {
    console.log('useOktaAuthHome', useOktaAuth());

    return (
        <div className="page">
            <h1>Login with React</h1>
            <Link to="/private">
                <button type="button">Visit Restricted Page</button>
            </Link>
        </div>
    );
}

export default Home;
