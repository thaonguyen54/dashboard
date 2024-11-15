
const base64ToObject = (s: string) => JSON.parse(atob(s));

const decodeJWT = (token: string) => {
  const [header, payload, signature] = token.split(".");

  return {
    header: base64ToObject(header),
    payload: base64ToObject(payload),
    signature,
  };
};

export const isTokenExpired = (token: string) => {
  if (!token) return true;
  try {
    const decodedToken = decodeJWT(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.payload.exp ? decodedToken.payload.exp < currentTime : true;
  } catch (error) {
    return true;
  }
};
