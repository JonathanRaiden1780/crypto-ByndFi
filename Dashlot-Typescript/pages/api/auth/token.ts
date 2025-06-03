
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type TokenResponse = {
  access_token: string;
  id_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
};

type ErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ message: 'Código de autorización no proporcionado' });
    }

    // Configuración de AWS Cognito
    const clientId = process.env.COGNITO_CLIENT_ID;
    const clientSecret = process.env.COGNITO_CLIENT_SECRET;
    const redirectUri = process.env.COGNITO_REDIRECT_URI;
    const tokenEndpoint = `${process.env.COGNITO_DOMAIN}/oauth2/token`;

    // Parámetros para el intercambio de código por tokens
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', clientId as string);
    params.append('code', code);
    params.append('redirect_uri', redirectUri as string);

    // Si hay un secreto de cliente, incluir la autorización básica
    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    if (clientSecret) {
      const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${auth}`;
    }

    // Realizar la solicitud al endpoint de token de Cognito
    const response = await axios.post(tokenEndpoint, params, { headers });

    // Devolver los tokens al cliente
    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error al intercambiar el código por tokens:', error);
    return res.status(500).json({
      message: error.response?.data?.error_description || error.message || 'Error al procesar la autenticación',
    });
  }
}