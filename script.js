// DOM Elements
	const display = document.querySelector('#display');
	const clearBtn = document.querySelector('#all-clear');
	const expBtn = document.querySelector('#exp');
	const operatorBtns = document.querySelectorAll('.operator');
	const oneThruNineBtns = document.querySelectorAll('.digit');
	const zeroBtn = document.querySelector('#zero');
	const decimalBtn = document.querySelector('#point');
	const equalBtn = document.querySelector('#equal');

// Operations Variables:
	let firstOperand = '';
	let secondOperand = '';
	let operation = null;
	let decimalClicked = false;

// OPERATOR FUNCTIONS
	// Addition function
		function add(a, b) {
			return a + b;
		};
	// Subtraction function
		function subtract(a, b) {
			return a - b;
		};

	// Multiplication function
		function multiply(a, b) {
			return a * b;
		};

	// Division function
		function divide(a, b) {
			return a / b;
		};

	// Exponentiation function
		function exponentiation(a, b) {
			return a ** b;
		};

// DISPLAY FUNCTIONS
	function appendToDisplay(e) {
		display.value += e.target.textContent;
	};

	function clearDisplay() {
		display.value = '';
		firstOperand = '';
		secondOperand = '';
		decimalClicked = false;
		operation = null;
		decimalBtn.addEventListener('click', appendToDisplay);
		operatorBtns.forEach(btn => btn.classList.remove('active'));
	};

// USER INPUT FUNCTION
function saveOperands(e) {
    let activeOperator = document.querySelector('.operator.active');

    if (activeOperator) {
        secondOperand += e.target.textContent;
        console.log('Building secondOperand:', secondOperand); // Add this
		display.value = secondOperand;
    } else {
        firstOperand += e.target.textContent;
        console.log('Building firstOperand:', firstOperand); // And this
    }
};

function saveOperator(e) {
	if (e.target.textContent === '+') {
		operation = add;
	} else if (e.target.textContent === '-') {
		operation = subtract;
	} else if (e.target.textContent === '*') {
		operation = multiply;
	} else if (e.target.textContent === '/') {
		operation = divide;
	} else if (e.target.textContent === '^') {
		operation = exponentiation;
	} 
};

function decimalTracker() {
	if (firstOperand.includes('.') && operation == null || 
		secondOperand.includes('.') && operation !== null) {
		decimalClicked = true;
	}

	if (decimalClicked) {
		decimalBtn.removeEventListener('click', saveOperands);
		decimalBtn.removeEventListener('click', appendToDisplay);
	}
	
	if (operation !== null && firstOperand !== '') {
		decimalClicked = false;
		decimalBtn.addEventListener('click', saveOperands);
	}

};

// Toggle the Active Button
	function toggleClass(e) {
		let activeButton = e.target;
		console.log(activeButton);

		operatorBtns.forEach(operatorBtn => operatorBtn == activeButton ? activeButton.classList.add('active') 
		: operatorBtn.classList.remove('active')); 
	};

// OPERATE FUNCTION
	// Takes an operation and 2 numbers, then calls
	// one of the above functions on those numbs.

function operate() {
    console.log('Before calculation:');
    console.log('firstOperand:', firstOperand, typeof firstOperand);
    console.log('secondOperand:', secondOperand, typeof secondOperand);
    
    let calc = [+firstOperand, +secondOperand];
    console.log('calc array:', calc); // Check the converted numbers
    
    let result = calc.reduce(operation);
    console.log('result:', result);
    
    result === Infinity ? display.value = 'lol nice try' : display.value = parseFloat(result.toFixed(2));
};

// EVENT LISTENERS
	clearBtn.addEventListener('click', clearDisplay);
	zeroBtn.addEventListener('click', appendToDisplay);
	decimalBtn.addEventListener('click', appendToDisplay);
	decimalBtn.addEventListener('click', saveOperands);
	decimalBtn.addEventListener('click', decimalTracker);
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', appendToDisplay));
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', saveOperands));
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', decimalTracker));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', toggleClass));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', saveOperator));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', decimalTracker));
	expBtn.addEventListener('click', toggleClass);
	equalBtn.addEventListener('click', operate);
