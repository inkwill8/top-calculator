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

// Operator functions go here:
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
		operation = null;
		operatorBtns.forEach(btn => btn.classList.remove('active'));
	};

// USER INPUT FUNCTION
	function saveOperands(e) {
		let activeOperator = document.querySelector('.operator.active');


	// Condition statement: if operator class is 'active' attribute the
	// next clicked button to secondOperand
	

		if (activeOperator) {
			secondOperand += e.target.textContent;
			display.value = secondOperand;
		} else {
			firstOperand += e.target.textContent;
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

// OPERATE FUNCTION
	// Takes an operation and 2 numbers, then calls
	// one of the above functions on those numbs.

	function operate(e) {
		let calc = [+firstOperand, +secondOperand];

		let result = calc.reduce(operation);	
		result === Infinity ? display.value = 'lol nice try' : display.value = result;
	};

// Toggle the Active Button
	function toggleClass(e) {
		let activeButton = e.target;

		operatorBtns.forEach(operatorBtn => operatorBtn == activeButton ? activeButton.classList.add('active') 
		: operatorBtn.classList.remove('active')); 
	};

// EVENT LISTENERS
	clearBtn.addEventListener('click', clearDisplay);
	zeroBtn.addEventListener('click', appendToDisplay);
	decimalBtn.addEventListener('click', appendToDisplay);
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', appendToDisplay));
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', saveOperands));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', toggleClass));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', saveOperator));
	equalBtn.addEventListener('click', operate);

