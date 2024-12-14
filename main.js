// 1)
function square(num) {
    const x = num * num;
    return x;
};
console.log(square(4));


// 2)
function fahrenheit(c) {
    const x = (1 * 9/5) + 32;
    return x;
};
console.log(fahrenheit(1));


// 3)
function checking(num, start, end) {
    if(num >= start && num <= end) { 
      return  console.log(`რიცხვი მოქცეული მომხმარებლის მიერ შეყვანილ დიაპაზონში`);
    }else {
      return  console.log(`რიცხვი არ არის მოქცეული მომხმარებლის მიერ შეყვანილ დიაპაზონში`);
    }
    
};
checking(2, 1, 6);


// 4) 
function leap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return console.log(`${year} წელი ნაკიანია.`);
    } else {
        return console.log(`${year} წელი არ არის ნაკიანი.`);
    };
};

leap(2024);



// 5)
function calculator() {
    const number1 = Number(prompt("Enter the first number"));
    const number2 = Number(prompt("Enter the second number"));
    const operator = prompt("Enter the operation");

    let result;

    if (operator === "+") {
        result = number1 + number2;
    } else if (operator === "-") {
        result =  number1 - number2;
    } else if (operator === "*") {
        result =  number1 * number2;
    } else if (operator === "/") {
        result =  number1 / number2;
    } else {
        alert("Can not operete")
    };

    return console.log(result);
};

calculator();