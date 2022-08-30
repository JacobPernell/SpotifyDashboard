import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Yo';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.text();
};

getData('/')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
