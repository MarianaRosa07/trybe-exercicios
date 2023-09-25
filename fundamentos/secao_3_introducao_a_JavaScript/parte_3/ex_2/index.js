const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
const addProperty = (Object, key, value) => {
    if (typeof Object[key] === 'undefined')
    Object[key] = value;
}

addProperty(customer, 'email', 'roberto.silva@email.com');
addProperty(customer, 'fone', '(13) 99100-0000');
addProperty(customer, 'userGithub', 'roberto.git00');
addProperty(customer, 'linkedIn', 'Roberto.linkedIn');

console.log(customer);