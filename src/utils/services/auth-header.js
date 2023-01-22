export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("pexcelservices"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer" + user.accessToken };
  } else {
    return {};
  }
};
