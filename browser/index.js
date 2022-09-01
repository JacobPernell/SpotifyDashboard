import './style.css';

const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  fetch('/api/login')
    .then(response => response.text())
    .then(data => console.log('Data :', data))
    .catch(err => console.log('Error: ', err));
});
