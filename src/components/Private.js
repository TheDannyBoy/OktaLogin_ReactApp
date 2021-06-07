import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

function Private() {
    console.log('useOktaAuthPrivate', useOktaAuth());

    return (
        <div className="page">
            <div className="warning">
                <h1>Restricted Access</h1>
                <h2>Authorized Personnel Only</h2>
            </div>
        </div>
    );
}

export default Private;
