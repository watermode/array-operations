function sumInput() {
    let numbers = [];
  
    while (true) {
      let input = prompt("Введіть число:");

      if (input === null || input.trim() === "") break;
  
      let value = Number(input);
  
      if (!isFinite(value)) break;
  
      numbers.push(value);
    }
  
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
  
    return sum;
  }
  
  alert("Сума: " + sumInput());
  
