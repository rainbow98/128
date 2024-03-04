function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }
  
 
  function findGreatestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[3]);
  const num3 = parseInt(process.argv[4]);
  
  
  console.log(`Number ${num1} is ${checkEvenOrOdd(num1)}.`);
  console.log(`Number ${num2} is ${checkEvenOrOdd(num2)}.`);
  console.log(`Number ${num3} is ${checkEvenOrOdd(num3)}.`);
  

  const greatestNumber = findGreatestNumber(num1, num2, num3);
  console.log(`The greatest number among ${num1}, ${num2}, and ${num3} is ${greatestNumber}.`);