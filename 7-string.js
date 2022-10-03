var str='Java Script';

console.log(str.length);  // 11
console.log(str.charAt(2)); // v
console.log(str.includes('ava')); // true

var str2='Hello Mike, welcome to Amazon world';
console.log(str2.indexOf('Amazon')); //23 --> index of 'A'
console.log(str2.indexOf('Amazon',25)); // go to 24 and since start looking for 'Amazon'

var replace=str2.replace('Amazon','Ebay');//Hello Mike, welcome to Ebay world
console.log(replace);

var arr=str2.split(' ');
console.log(arr);

console.log(str2.substring(6,10)); // from, to(to is not included)
console.log(str2.substr(6,4)); // from, length

console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

var str3='   java script   ';
console.log(str3.trim());
