const admin_username = "ADMIN";
const admin_password = "ADMIN";

export const authenticateUser = (userName: string, password: string) => {
  if (
    userName?.toLocaleUpperCase() === admin_username &&
    password?.toLocaleUpperCase() === admin_password
  ) {
    return true;
  }

  return false;
};
