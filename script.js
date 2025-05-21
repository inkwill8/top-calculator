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

	// Square function
		function square(a, b) {
			return a ** b;
		};


// Operations Variables:
	// Operand 1
		let firstOperand = null;
	// Operation
		let operation = null;
	// Operand 2
		let secondOperand = null;




// OPERATE FUNCTION
	// Takes an operation and 2 numbers, then calls
	// one of the above functions on those numbs.

	//function operate(operation, firstOperand, secondOperand) {
		//operation(firstOperand, secondOperand)  

// DOM Elements
	const display = document.querySelector('#display');
	const clearBtn = document.querySelector('#all-clear');
	const squareBtn = document.querySelector('#square');
	const operatorBtns = document.querySelectorAll('.operator');
	const oneThruNineBtns = document.querySelectorAll('.digit');
	const zeroBtn = document.querySelector('#zero');
	const decimalBtn = document.querySelector('#point');
	const equalBtn = document.querySelector('#equal');

// DISPLAY FUNCTIONS
	function appendToDisplay(e) {
		display.value = e.target.textContent;
	};

	function clearDisplay() {
		display.value = '';
	};

// EVENT LISTENERS
	clearBtn.addEventListener('click', clearDisplay);
	zeroBtn.addEventListener('click', appendToDisplay);
	decimalBtn.addEventListener('click', appendToDisplay);
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', appendToDisplay));

	//squareBtn.addEventListener('click', );

