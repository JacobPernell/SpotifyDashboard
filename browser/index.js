import './style.css';

const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
  fetch('http://127.0.0.1:8000/api/login', {
    mode: 'no-cors',
  })
    .then(response => response.text())
    .then(data => console.log('Data :', data))
    .catch(err => console.log('Error: ', err));
});
