import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
    const { oktaAuth, authState } = useOktaAuth();

    const login = async () => { await oktaAuth.signInWithRedirect(); }
    const logout = async () => { await oktaAuth.signOut(); }

    return (
        <header>
            <div>React Login</div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/private">Private</Link></li>
            </ul>
            {authState.isAuthenticated && <button onClick={logout}>Logout</button>}
            {!authState.isAuthenticated && <button onClick={login}>Sign In</button>}
        </header>
    );
}

export default Header;
