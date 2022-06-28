// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Design Patterns</h1>`;

/* Builder pattern */
console.log('---------Builder Pattern---------');
const obj1 = {
  id: 1,
  name: 'Tushar',
};

/* adding properties to object with the help of function*/
function addPropertyToObj(obj) {
  obj.addProp = () => {
    console.log('Adding property to obj using function...');
  };
}

addPropertyToObj(obj1);
console.log(obj1);

obj1.addProp();
