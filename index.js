const num1 = parseFloat( prompt('enter first number: '));
const operator = prompt('enter operator (+, -, /, *): ');
const num2 = parseFloat( prompt('enter second number: '));
let result = 0;

if(isNaN(num1) || isNaN(num2))[
    alert('Invalid input!')
]
else{
    if(operator == '+')[
        result = num1 + num2
    ]
    else if(operator == '-')[
        result = num1 - num2
    ]
    else if(operator == '/')[
        result = num1 / num2
    ]
    else if(operator == '*')[
        result = num1 * num2
    ]
    document.write(num1 + operator + num2 + ' = ' + result);
}