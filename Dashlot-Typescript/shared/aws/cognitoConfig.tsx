import { CognitoUserPool } from 'amazon-cognito-identity-js';

// Configuración de AWS Cognito
const poolData = {
  UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
  ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '',
};

// Crear y exportar el pool de usuarios de Cognito
export const userPool = new CognitoUserPool(poolData);

// URL de redirección para OAuth
export const cognitoOAuthRedirectUrl = process.env.NEXT_PUBLIC_COGNITO_OAUTH_REDIRECT_URL || '';
export const cognitoOAuthSignOutUrl = process.env.NEXT_PUBLIC_COGNITO_OAUTH_SIGN_OUT_URL || '';

// Dominio de Cognito
export const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN || '';