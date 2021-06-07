import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const AuthHandlerComponent = () => {
    const { authState } = useOktaAuth();

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        setIsAuthenticated(authState.isAuthenticated);
        console.log('AuthHandlerComponent State', authState);
    }, [authState]);

    return <>{isAuthenticated ? `User ${authState.idToken.claims.name} has been authenticated` : ''}</>;
};

export default AuthHandlerComponent;
