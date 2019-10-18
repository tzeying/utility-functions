import querystring from 'querystring';

export async function handler(event: any, context: any) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello'})
  };
}