// for(let a = 1; a <= 100; a++){
//     if(a % 5 == 0 && a % 3 ==0){
//         console.log(a +'FizzBuzz');
//     }
//     else if(a % 3 == 0){
//         console.log( a + 'Fizz');
//     }
//     else if(a % 5 == 0) {
//         console.log(a + 'Buzz');
//     }  
// }
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }

  