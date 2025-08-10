export const getCookie = (name: string) => {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
};
