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
