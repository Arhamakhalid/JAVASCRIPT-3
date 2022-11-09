alert("HELLOW JAVASCRIPT");

var fruits = ["orange", "grapes", "papaya", "mango", "apple"];

console.log(fruits[2]);

var a = ["abc", "def", "ghi", "jkl", "mno"];
a.push("pqr");
console.log(a)

a.pop();
console.log(a)

a.shift();
console.log(a);

a.unshift("stu");
console.log(a);

a.slice(2, 5);

var b = a.slice(2, 5);
console.log(b)

var c = ["x", "y", "z", "p", "o"];
c.splice(0, 1);
console.log(c)

c.splice(2, 1, "g", "l", "v");
console.log(c);

var d = ["s", "h", "e", "h"];
d.splice(2, 0, "i","f","a");
console.log(d);

var i = d.indexOf("e");
console.log(i);

var i = d.indexOf("h");
console.log(d[i]);

var z = ["a", "b", "c", "d", "e", "b", "c", "d", "e", "b", "c", "d", "e", "b", "c", "d", "e"];
var y = z.length;
console.log(y);



for (var a = 0; a < 10; a++){
    console.log(a);
}

for (var i = 0; i < 10; i++){
    console.log("3 X "+ (i+1)+" = "+ 3*(i+1) )
}

