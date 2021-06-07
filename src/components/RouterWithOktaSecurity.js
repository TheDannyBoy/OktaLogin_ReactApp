import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Private from "./Private";
// import Login from "./Login";

const RouterWithOktaSecurity = (props) => {
	const history = useHistory();

	const restoreOriginalUri = async (_oktaAuth, originalUri) => {
		history.replace(toRelativeUrl(originalUri, window.location.origin));
	};

	const onAuthRequired = () => {
		history.push('/login')
	};

	const oktaAuth = new OktaAuth({
		issuer: "https://dev-19946378.okta.com/oauth2/default",
		clientId: "0oavswegqWqrOF2T75d6",
		redirectUri: window.location.origin + "/callback",
	});

	return (
		<Router>
			<div className="App">
				<div className="page">
					<div className="content">
						<Security
							oktaAuth={oktaAuth}
							restoreOriginalUri={restoreOriginalUri}
							onAuthRequired={onAuthRequired}
						>
							<Header />
							<Route path="/" exact={true} component={Home} />
							{/* <Route path='/login' exact={true} component={Login} /> */}
							<SecureRoute path="/private" exact={true} component={Private} />
							<Route path="/callback" component={LoginCallback} />
							<SecureRoute>
								{props.children}
							</SecureRoute>
						</Security>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default RouterWithOktaSecurity;
