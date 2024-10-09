//assignment One
const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
];

students.forEach((students) => console.log(students.name, students.grade));

const topStudents = students.filter((student) => student.grade > 80);
//test to see if it logged properly
//console.log(topStudents);

const youngStudents = students.filter((student) => student.age < 21);
//test to see if logged properly
//console.log(youngStudents);

students.forEach((topStudents) => console.log(topStudents.name));

////////////////////////////////////////////////////

//assignment Two
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
  { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
  { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
  { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
  { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
  { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
  { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];

products.forEach((products) => console.log(products.name, products.price));

products.forEach((products) => {
  products.price = products.price * 1.1; 
  console.log(products.price)
});

const categories = [];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('Unique Categories:', categories);

const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics)

const expensiveProducts = products.filter(product => product.price > 300);
console.log('Expensive Products:', expensiveProducts);

const highlyRated = products.filter(product => product.rating >= 4.5);
console.log('Highly Rated:', highlyRated);

highlyRated.forEach((highlyRated) => console.log('Highly Rated:', highlyRated.name));

const affordableElectronics = products.filter(product => (product.price < 1000 && product.category === 'Electronics'));
affordableElectronics.forEach((affordableElectronics) => console.log('Affordable electronics:' , affordableElectronics));