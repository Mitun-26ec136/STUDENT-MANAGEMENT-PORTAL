// LifeFlow Blood Donation Network - Form Validation

const donorForm = document.getElementById("donorForm");
const formSuccess = document.getElementById("formSuccess");

const nameInput = document.getElementById("fullName");
const bloodInput = document.getElementById("bloodType");
const phoneInput = document.getElementById("phone");
const cityInput = document.getElementById("city");

const nameError = document.getElementById("nameError");
const bloodError = document.getElementById("bloodError");
const phoneError = document.getElementById("phoneError");
const cityError = document.getElementById("cityError");

function setError(input, errorElement, message) {
  input.classList.add("invalid");
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove("invalid");
  errorElement.textContent = "";
}

function validateName() {
  const value = nameInput.value.trim();

  if (value === "") {
    setError(nameInput, nameError, "Full name is required.");
    return false;
  }

  if (value.length < 3) {
    setError(nameInput, nameError, "Please enter at least 3 characters.");
    return false;
  }

  clearError(nameInput, nameError);
  return true;
}

function validateBloodType() {
  if (bloodInput.value === "") {
    setError(bloodInput, bloodError, "Please select your blood type.");
    return false;
  }

  clearError(bloodInput, bloodError);
  return true;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const phonePattern = /^[0-9]{10}$/;

  if (value === "") {
    setError(phoneInput, phoneError, "Phone number is required.");
    return false;
  }

  if (!phonePattern.test(value)) {
    setError(phoneInput, phoneError, "Enter a valid 10-digit phone number.");
    return false;
  }

  clearError(phoneInput, phoneError);
  return true;
}

function validateCity() {
  const value = cityInput.value.trim();

  if (value === "") {
    setError(cityInput, cityError, "City or location is required.");
    return false;
  }

  clearError(cityInput, cityError);
  return true;
}

donorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const isValid =
    validateName() &
    validateBloodType() &
    validatePhone() &
    validateCity();

  if (isValid) {
    formSuccess.hidden = false;

    alert("Registration successful! You are now part of the LifeFlow network.");

    donorForm.reset();

    setTimeout(() => {
      formSuccess.hidden = true;
    }, 5000);
  } else {
    formSuccess.hidden = true;
  }
});

nameInput.addEventListener("input", validateName);
bloodInput.addEventListener("change", validateBloodType);
phoneInput.addEventListener("input", validatePhone);
cityInput.addEventListener("input", validateCity);