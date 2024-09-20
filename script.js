const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);


let email = 'illia.nikolaienko10@gmail.com';
const emailSobachka = email.includes('@');
const emailLength = email.length;

console.log(emailSobachka);
console.log(emailLength)


let a = 'My ';
let b = 'name ';
let c = 'is ';
const fullName = a + b + c + 'Viktor';
console.log(fullName)


let userName = 'Illia';
let payment = 100;
alert('Дякуємо, ' + userName + '! ' + 'До сплати ' + payment + ' гривень');