var loginModal = document.getElementById('loginPopUpID');
var loginBtn = document.getElementById('loginButton');
var closeLoginBtn = document.getElementById('closeLoginButton');
var closeSignupBtn = document.getElementById('closeSignupButton');
var signupModal = document.getElementById('signUpPopUpID');
var signupBtn = document.getElementById('signupButton');

loginBtn.addEventListener('click', openLogin);
closeLoginBtn.addEventListener('click', closeLogin);
closeSignupBtn.addEventListener('click', closeSignUp);
signupBtn.addEventListener('click', openSignUp);

function openLogin(){
  loginModal.style.display = 'flex';

}

function closeLogin(){
  loginModal.style.display = 'none';
}

function openSignUp(){
  signupModal.style.display = 'flex';
}

function closeSignUp(){
  signupModal.style.display = 'none';
}
