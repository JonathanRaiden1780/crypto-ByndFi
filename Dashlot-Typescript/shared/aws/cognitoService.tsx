import { 
    CognitoUser, 
    AuthenticationDetails, 
    CognitoUserSession 
  } from 'amazon-cognito-identity-js';
  import { userPool, cognitoDomain, cognitoOAuthRedirectUrl } from './cognitoConfig';
  
  // Clase para manejar la autenticación con AWS Cognito
  class CognitoService {
    // Iniciar sesión con OAuth
    initiateOAuthLogin() {
      const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '';
      const redirectUri = cognitoOAuthRedirectUrl;
      const responseType = 'code';
      const scope = 'email openid profile';
      
      const authorizationUrl = `${cognitoDomain}/oauth2/authorize?client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}`;
      
      window.location.href = authorizationUrl;
    }
  
    // Iniciar sesión con credenciales
    login(username: string, password: string): Promise<CognitoUserSession> {
      const authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
      });
  
      const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
      });
  
      return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: (session) => {
            resolve(session);
          },
          onFailure: (err) => {
            reject(err);
          },
        });
      });
    }
  
    // Cerrar sesión
    logout() {
      const cognitoUser = userPool.getCurrentUser();
      if (cognitoUser) {
        cognitoUser.signOut();
        window.location.href = '/';
      }
    }
  
    // Obtener el usuario actual
    getCurrentUser(): Promise<CognitoUser | null> {
      return new Promise((resolve) => {
        const cognitoUser = userPool.getCurrentUser();
        
        if (!cognitoUser) {
          resolve(null);
          return;
        }
  
        cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
          if (err || !session || !session.isValid()) {
            resolve(null);
            return;
          }
          
          resolve(cognitoUser);
        });
      });
    }
  
    // Obtener el token JWT
    getJwtToken(): Promise<string | null> {
      return new Promise((resolve) => {
        const cognitoUser = userPool.getCurrentUser();
        
        if (!cognitoUser) {
          resolve(null);
          return;
        }
  
        cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
          if (err || !session) {
            resolve(null);
            return;
          }
          
          const jwtToken = session.getIdToken().getJwtToken();
          resolve(jwtToken);
        });
      });
    }
  
    // Verificar si el usuario está autenticado
    isAuthenticated(): Promise<boolean> {
      return this.getCurrentUser().then(user => !!user);
    }
  }
  
  export const cognitoService = new CognitoService();