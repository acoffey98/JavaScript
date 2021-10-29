//Properties 

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type..
Every string instance has a "length" property that stores number of characters in that String. 
You can retrieve property information by appending the string with a period and the property name:

console.log('Hello'.length);  
//Prints 5 

The . is another operator.. (We call it the dot operator) 

length is retireved from the instance of the string 'hello'. (Hello has 5 characters) 

console.log('Teaching the world how to code'.length);

Why would the length of a sentence be useful to know?

 You might be hosting a message board, and have a character limit per post. This forum, for example has a minimum characters per post limit. 
 As you get further along in learning to code, you’ll come to realize that you use the .length property of different objects quite often.

A method is an attribue (A method is function, perfroms some tasks ) .length is a value ONLY
We poll values, and call(invoke) methods

Methods:
Remember that methods are actions we can perform. JavaScript provides a number of string methods.

We call, or use these methods by appending an instance with:
-A period (dot operator)
-the name of a method
-opening or closing parameters

EX: 
'example string'.methodName()

EX:
console.log('Print this') 
We are calling the .log method on the console object.. 

.toUpperCase() method

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

.toUpperCase() method is called on the string instance 'hello'. 
The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.

.startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. 
Since the string 'Hey' does start with the letter 'H', the method returns the boolean true. 

//Built in string methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. 
The one method that seems ideal for us is .trim(). 
//Remove whitespaces:
console.log('    Remove whitespace   '.trim());

https://www.youtube.com/watch?v=s1PLS3SQHQ0
https://discuss.codecademy.com/t/why-would-the-length-of-a-sentence-be-useful-to-know/489725/5

Built in objects
-console is built in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

The great thing about objects is that they have methods!
Let’s call the .random() method from the built-in Math object:

Math.random() 
Math is the object 
random is the method()


To generate a random number between 0 and 50, we could multiply this result by 50, like so: 

Math.random()*50;

Math.floor() takes a decimal number and rounds down to the nearest whole number.

Math.floor(Math.random() *50);

Math.random generates a number between 0 and 1;
We then multiply it by 50 so now we have a number between 0-50 
Math.floor() rounds the numbre down to nearest whole number 

//Random number between 0-100 
console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100));

//Find a method on the javascript Math object that returns the smallest integer greater than or equal to a decimal number:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.
console.log(Math.ceil(43.8));


Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

Put the number 2017 in the parentheses of the method and use console.log() to print the result.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
The Number.isInteger() method determines whether the passed value is an integer. 

Number.isInteger()

console.log(Number.isInteger(2017));
returns true:



> Data is printed, or logged, to the console, a panel that displays messages, with console.log().
> We can write single-line comments with // and multi-line comments between /* and */.
> There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
> Numbers are any number without quotes: 23.8879
> Strings are characters wrapped in single or double quotes: 'Sample String'
> The built-in arithmetic operators include +, -, *, /, and %.
> Objects, including instances of data types, can have properties, stored information. 
The properties are denoted with a . after the name of the object, for example: 'Hello'.length. 
> Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or
instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
> We can access properties and methods by using the ., dot operator.
> Built-in objects, including Math, are collections of methods and properties that JavaScript provides.






















