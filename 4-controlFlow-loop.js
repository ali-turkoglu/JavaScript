//For loop
for (var i = 0; i < 5; i++) {
  console.log('inside the loop:'+i);
}
console.log('outside the loop:'+i);

for (var i = 0; i < 5; i++) {
  console.log('outer loop:'+i);
  for (var j = 0; j < 2; j++) {
    console.log('inner loop:'+j);
    if (j==1) {
      console.log('\n');
    }
  }
}

//while loop
var count=1;
while (count<5) {
  console.log(count);
  count+=2
}
//-------------------
console.log();

// Break
for (var i = 0; i < 10; i++) {
  if (i%3==0) {
    break;
  }
}
console.log(i);

//--------------------------------
console.log();

// Continue
var start =2;
var sum=0;

do {
  if (start%2==0) {
    continue;
  }
  sum+=start;
}while (++start<=10);
console.log(sum);
