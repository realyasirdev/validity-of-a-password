let password = "W3r@100a";

let hasLower = /[a-z]/.test(password);
let hasUpper = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let hasSpecial = /[$#@]/.test(password);
let lengthValid = password.length >= 6 && password.length <= 16;

if (hasLower && hasUpper && hasNumber && hasSpecial && lengthValid) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}