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

// Disable all inputs after a result to prevent erroneous calculations from being made
function disableInput() {
	operatorBtns.forEach(operatorBtn => operatorBtn.removeEventListener('click', saveOperator));
	decimalBtn.removeEventListener('click', appendToDisplay);
	decimalBtn.removeEventListener('click', saveOperands);
	zeroBtn.removeEventListener('click', appendToDisplay);
	oneThruNineBtns.forEach(digit => digit.removeEventListener('click', appendToDisplay));
	oneThruNineBtns.forEach(digit => digit.removeEventListener('click', saveOperands));
};

// Re-enable all inputs after clearing display
function enableInput() {
	operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener('click', saveOperator));
	decimalBtn.addEventListener('click', appendToDisplay);
	decimalBtn.addEventListener('click', saveOperands);
	zeroBtn.addEventListener('click', appendToDisplay);
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', appendToDisplay));
	oneThruNineBtns.forEach(digit => digit.addEventListener('click', saveOperands));
};

	function clearDisplay() {
		display.value = '';
		firstOperand = '';
		secondOperand = '';
		decimalClicked = false;
		operation = null;
		operatorBtns.forEach(btn => btn.classList.remove('active'));
		enableInput();
	};

// USER INPUT FUNCTION
function saveOperands(e) {
    let activeOperator = document.querySelector('.operator.active');

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

		operatorBtns.forEach(operatorBtn => operatorBtn == activeButton ? activeButton.classList.add('active') 
		: operatorBtn.classList.remove('active')); 
	};

// OPERATE FUNCTION
	// Takes an operation and 2 numbers, then calls
	// one of the above functions on those numbs.

function operate() {
    let calc = [+firstOperand, +secondOperand];
    
    let result = calc.reduce(operation);
    
    result === Infinity ? display.value = 'lol nice try' : display.value = parseFloat(result.toFixed(2));
	disableInput();
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
