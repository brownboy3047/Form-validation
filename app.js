//* for all the input
const contactName = document.getElementById("contact-name");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const contactPassword = document.getElementById("contact-password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-btn");

//* target the span element for error message
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("pass-error");
const confirmPasswordError = document.getElementById("confirm-error");
const submitError = document.getElementById("submit-error");

//* validating for contact name
contactName.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validateName = contactName.value;

  //* regular expression to validate contact name(https://regex101.com/)
  const namePattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

  if (validateName.length === 0) {
    nameError.innerText = "Name is required";
  } else if (!namePattern.test(validateName)) {
    nameError.innerText = "Write fullname";
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

//* validating for phone number
contactPhone.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validatePhone = contactPhone.value;

  //* regular expression to validate phone number
  const phonePattern = /^(\+234|0)[0-9]{10}$/;

  if (validatePhone.length === 0) {
    phoneError.innerText = "Phone number is required";
  } else if (!phonePattern.test(validatePhone)) {
    phoneError.innerText = "Enter a valid digit numbers";
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

//* validating for email
contactEmail.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validateEmail = contactEmail.value;

  //* regular expression to validate email
  const emailPattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*\.[a-z]{2,4}$/;

  if (validateEmail.length === 0) {
    emailError.innerText = "Email is required";
  } else if (!emailPattern.test(validateEmail)) {
    emailError.innerText = "Enter a valid email";
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

//* validating for password

contactPassword.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validatePassword = contactPassword.value;

  //  * regular expression to validate password
  const passwordPattern = /^[A-Za-z@[0-9]{6,12}$/;

  if (validatePassword.length === 0) {
    passwordError.innerText = "Password is required";
  } else if (!passwordPattern.test(validatePassword)) {
    passwordError.innerText =
      "Password must be minimum of 6 and maximum of 12 characters";
  } else {
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

// * validating for confirm password

confirmPassword.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validateConfirmPassword = confirmPassword.value;

  //   *regular expression same as for password
  const confirmPasswordPattern = /^[A-Za-z@[0-9]{6,12}$/;

  if (validateConfirmPassword !== contactPassword.value) {
    confirmPasswordError.innerText = "Password does not match";
  } else if (!confirmPasswordPattern.test(validateConfirmPassword)) {
    confirmPasswordError.innerText =
      "Password must be minimum of 6 and maximum of 12 characters";
  } else {
    confirmPasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});
