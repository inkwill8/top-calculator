// DOM Elements
	const display = document.querySelector('#display');
	const clearBtn = document.querySelector('#all-clear');
	const squareBtn = document.querySelector('#square');
	const operatorBtns = document.querySelectorAll('.operator');
	const oneThruNineBtns = document.querySelectorAll('.digit');
	const zeroBtn = document.querySelector('#zero');
	const decimalBtn = document.querySelector('#point');
	const equalBtn = document.querySelector('#equal');

// Operations Variables:
	const operationVars = [null, null];

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

// DISPLAY FUNCTIONS
	function appendToDisplay(e) {
		display.value += e.target.textContent;
	};

	function clearDisplay() {
		display.value = '';
		operatorBtns.forEach(btn => btn.classList.remove('active'));
	};

// USER INPUT FUNCTION
	function saveUserInput(e) {
		let input = +e.target.textContent;	
		return input;
	};

// OPERATE FUNCTION
	// Takes an operation and 2 numbers, then calls
	// one of the above functions on those numbs.

	function operate(e) {
		let input = saveUserInput(e);
		operationVars.splice(0, 2);
		operationVars.push(input);
			
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
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', saveUserInput));
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', toggleClass));
	equalBtn.addEventListener('click', operate);

