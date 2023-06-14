// Function to generate a random password
function generatePassword(length = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Generate a random password with default length of 8 characters
const password1 = generatePassword();
console.log(password1);

// Generate a random password with length of 12 characters
const password2 = generatePassword(12);
console.log(password2);
