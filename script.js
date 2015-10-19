function Cubed (num1) {
	for (var a = 0; a < 3; a++) {
		num1 *=2;
		return num1;
	}
}

function divThree (num2) {
	num2 = num2%3;
	return num2;
}

function arithmetic (num3) {
	return ((((num3 + 10 - 9) * 8) + 7 - 6) * 5 + 4 - 3) * 2 + 1;
}

console.log(Cubed(divThree(arithmetic(6))));