export const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
export const PasswordOneUpper = /[A-Z]/;
export const PasswordMinLength = /^.{8,}$/;
export const PasswordOneNumber = /\d/;
export const PasswordOneChar = /[\W_]/;
