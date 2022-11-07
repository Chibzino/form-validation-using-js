/*

let a = 7;
let b = 6;
let c = a + b;
document.write('Answer: ' + c)

const name = 'John';
const age = 20;
document.write('My name is ' + name + ' I am ' + age + ' Years');

const s = 'Hello world';
document.write(s.length);

const s = new Array (1, 2, 3, 4, 5, 6,);
document.write(s);

const fruits = ['Apple', 'Sugarcane', 'Orange'];
console.log(fruits);




const person = {
  firstName: 'John',
  lastName: 'Paul',
  age: 20,
  hobbies: ['music', 'football', 'movies'],
  address: {
    street: '50 Ward',
    city: 'Makurdi',
    state: 'Benue',
  }
}
console.log(person.firstName,  person.lastName);
console.log(person.hobbies [1]);


for(let i=0; i<20; i++)
  console.log(i);

  const x = 10;
  if(x==10){
    console.log('x is 10');
  }
  else if(x<10){
    console.log('x is less than 10');
  }
  else{
    console.log('x is greater than 10');
  }




   function addnum(p1, p2){
    document.write (p1 + p2);
  }
  addnum(5, 7);

  function addnum(p1, p2){
    return p1 * p2;
  }
 document.write( addnum(5, 7));


 
function person(firstName, lastName, DOB){
  this.firstName = firstName;
  this.lastName = lastName;
  this.DOB = DOB;
}
const person7= new person('John', 'Paul', '20-10-1999');
console.log(person7);



function Celsius(F){
  return (5/9) * (F-32);
}
document.write('The temperature is ' + Celsius (77));

var car = ['ford', 'toyota', 'Benz'];
  for(var i=0; i<3; i++){
    document.write(car[i]);
  }



  var car = {
  manufacturer : 'Benz',
  model: 'C350',
  price: '$20,000',

 carSeries: function() 
 {
 return('This is the best brand of car');
  }
}
document.write(car.manufacturer);



function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
document.write(myFather.firstName);



TIMIMG FUNCTION IN JS
function Start(){
  setTimeout(function(){
    alert('Welcome to JS');
  },2000)
}


REGULAR EXPRESSION
var regex = /welcome/i
var str1 = 'Welcome to the world of impossibilities';

var output = regex.exec(str1);
console.log(output);

function employee(){
  var empid = document.getElementById('eid').value;
  var check = /[DE]253[10-99]/i
  if((check.test(empid)))
  {
    alert('Valid Employee ID');
  }
  else{
    alert('Invalid Employee ID');
  }
}
*/


function validationForm()
{
  var uname= document.getElementById('uname').value;
  var pword = document.getElementById('pword').value;
  var age = document.getElementById('age').value;

  if(uname=="" || pword == "" || age == "")
  {
    alert('Fields cannot be empty');
    return false;
  }

  else if(uname=='OJ' && pword == '12345' && age >= 18)
  {
    alert('Sign-up successfull');
    return true;
  }

  else if (age < 18)
  {
    alert('underage');
    return false;
  }
  
  else{
    alert('Wrong credentials');
    return false;
  }
}




  



