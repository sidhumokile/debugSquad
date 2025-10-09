// JavaScript Introduction

// JavaScript (JS) is a programming language used to make web pages interactive and dynamic.
// It works inside the browser along with HTML and CSS.

//  Example:
// Language	What it does
// HTML	Gives structure (skeleton)
// CSS	Adds style (looks)
// JavaScript	Adds behavior (actions) and functions

// Brief History of JavaScript
// Year	Event
// 1995-	Created by Brendan Eich at Netscape in just 10 days
// 1996-	Named JavaScript (earlier called LiveScript)
// 1997	-Became standard through ECMAScript (ES)
// 2009+ -	Modern versions (ES5, ES6, ES7...) added new features
// Today	Used for websites, mobile apps, games, servers (Node.js)

// Types of JavaScript — Ways to Write JS in Web Pages

// JavaScript can be written in 3 main ways in an HTML file:

// Type	Description
// 1️ Inline JavaScript	Written directly inside an HTML tag
// 2️ Internal JavaScript	Written inside <script> tag in the same HTML file
// 3️ External JavaScript	Written in a separate .js file and linked to HTML


// Variables
// A variable is like a container or box that stores data — such as numbers, text, or other information
// allow to maniulate and reuse the data and code.


// syntax:
// let variableName = value;

// 
var score=50;
score = score+20;
console.log(score);

// way to declare the variable
// * there are 3 ways to delare
// 1. Var-- function scoped
// 2. let-- block-scoped
// 3. const--block--scoped

/*-Rules for Naming Variables (Identifiers)

 Valid Names

1. Must start with a letter, underscore (_)

2. Can contain letters, digits, underscores ($)

3. Are case-sensitive (e.g. Name ≠ name)

4. Cannot use JavaScript keywords like let, if, for, etc.-/ 

/** Var**/ 
// Old way to declare variables (from 1995).
// It can be updated and redeclared anywhere in the same function or global scope.

var num=10;
console.log(num);//output:10//

num=20;  //change the value//
console.log(num);//output:20//

var num=30;
console.log(num);//output:30//

// var= chaneable+redeclarable

/** let**/
//  let like a modern box with a lock name tag —
// you can change the number inside,
// but cannot create another box with the same name in the same area.

let count=5;
console.log(count)//5//

count=10  //here we can change the value//
console.log(count)//10//

// let count=15
// console.log(count)//error: cannot redeclare//

// let = changeable, but not redeclarable//

//**const **/
// const as a sealed box —
// once you put a number inside, you can’t change it or make it again.

const sid =3;
console.log(sid); //3//

// sid=6; erroe:cannot change value
// const sid=3/2; error: cannot redeclare

// const = cannot change + cannot redeclare


//difference of 3 in scope//
{
    var x=3;//globalor function scope//
    let y=5;//block scope
    const z=7;// block scope
    
}


console.log(x);// 3 var works outside block
// console.log(y);// error
// console.log(z);// error


// real time example

var totalMarks=100;
let obtainMarks=70;
const highMarks=90;

obtainMarks = obtainMarks + 10

console.log("total",totalMarks);
console.log("obtain",obtainMarks);
console.log("highest",highMarks);
