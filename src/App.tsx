import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';

const oidcConfig = {
  onSignIn: async (user: any) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority: 'https://pre-sso-api.audi.de',
  clientId: 'pre-AudiCloudAcccountManagementTool',
  responseType: 'id_token',
  redirectUri: 'https://test.amt.cloud.audi/',
  metadata: {
    issuer: 'https://pre-sso-api.audi.de/mga/sps/oauth/oauth20',
    authorizationEndpoint:
      'https://pre-sso-api.audi.de/mga/sps/oauth/oauth20/authorize',
    userinfoEndpoint:
      'https://pre-sso-api.audi.de/mga/sps/oauth/oauth20/userinfo',
    endSessionEndpoint: '',
    jwksUri:
      'https://pre-sso-api.audi.de/mga/sps/oauth/oauth20/jwks/pre-www-audiOIDC',
  },
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>OIDC React</p>
          <LoggedIn />
        </header>
      </div>
    </AuthProvider>
  );
}

export default App;
