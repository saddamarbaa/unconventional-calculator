/** @format */

const defaultResult = 0;
let currentResult = defaultResult;
let logEtres = [];

const getUserNumberInput = () => parseInt(userInput.value);

const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
	const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
	outputResult(currentResult, calcDescription);
};

const add = () => calculateResult("ADD");
const subtract = () => calculateResult("SUBTRACT");
const multiply = () => calculateResult("MULTIPLY");
const divid = () => calculateResult("DIVIDE");

// EddEventListener
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divid);

const calculateResult = (calculationType) => {
	if (
		calculationType !== "ADD" &&
		calculationType !== "SUBTRACT" &&
		calculationType !== "MULTIPLY" &&
		calculationType !== "DIVIDE"
	) {
		return;
	}
	const entredNumber = getUserNumberInput();
	const initialResult = currentResult;
	let mathOperator;
	if (calculationType === "ADD") {
		currentResult += entredNumber;
		mathOperator = "+";
	} else if (calculationType === "SUBTRACT") {
		currentResult -= entredNumber;
		mathOperator = "-";
	} else if (calculationType === "MULTIPLY") {
		currentResult *= entredNumber;
		mathOperator = "*";
	} else if (calculationType === "DIVIDE") {
		currentResult /= entredNumber;
		mathOperator = "/";
	}
	createAndWriteOutput(mathOperator, initialResult, entredNumber);
	writeToLog(calculationType, initialResult, entredNumber, currentResult);
};

function writeToLog(
	operationIdentfire,
	prevsResult,
	operationNumber,
	newResult,
) {
	let obj = {
		operation: operationIdentfire,
		prevsResult: prevsResult,
		number: operationNumber,
		result: newResult,
	};

	logEtres.push(obj);
	console.log(obj);
	console.log(logEtres);
}
