import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'master',
  clientId: 'react-auth',
});

export default keycloak;

