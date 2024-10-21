export const validate = (email, password) => {
  const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidate =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(
      password
    );

    if(!isEmailValidate) return "Email is not valid"
    if(!isPasswordValidate) return "Password is not valid"

    return null
};
