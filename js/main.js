const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-link-container');
const toolBar = document.querySelector('.top-level');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
// form validation
const form = document.getElementById('contact');
const email = document.getElementById('email');
const fname = document.getElementById('fname');
const message = document.getElementById('message');

function activate() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  toolBar.classList.toggle('active');
  logo.classList.toggle('active');
  body.classList.toggle('lock-scroll');
}

hamburger.addEventListener('click', () => {
  activate();
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    activate();
  });
});

// form validity check

function setSuccess(input) {
  const inputWrapper = input.parentElement;
  inputWrapper.classList.add('success');
}

function setError(input, message) {
  const inputWrapper = input.parentElement;
  const small = document.querySelector('small');
  inputWrapper.classList.add('error');
  small.innerText = message;
}

function validateInput() {
  const emailValue = email.value.trim();
  const fnameValue = fname.value.trim();
  const messageValue = message.value.trim();
  let isFalse = false;

  if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(emailValue)) {
    setSuccess(email);
    isFalse = true;
  }
  setError(email, 'Invalid email... Try lowercase');

  if (fnameValue === '') {
    setError(fname, 'Full name cannot be blank');
  } else {
    setSuccess(fname);
  }
  if (messageValue === '') {
    setError(message, 'Message cannot be blank');
  } else {
    setSuccess(message);
  }

  return isFalse;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInput()
});
