// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* Builder pattern */
const obj1 = {
  id: 1,
  name: 'Tushar',
};

function addPropertyToObj(obj) {
  obj.addProp = () => {
    console.log('Adding property to obj');
  };
}

addPropertyToObj(obj1);
console.log(obj1);

obj1.addProp();
