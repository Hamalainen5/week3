const person = {
  personName: 'Alice',
  age: 30,
  city: 'New York'
};

// Destructure the object to extract name and age
const { personName, age } = person; 
console.log('Name:', personName); // Output: Alice
console.log('Age:', age); // Output: 30