// utils.js
export const getJwtTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "jwt") {
      return value;
    }
  }
  return null;
};
