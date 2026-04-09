function calculateFactorial() {
    const num = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num) || num < 0) {
        resultDiv.textContent = "Please enter a valid non-negative number.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    resultDiv.textContent = `Factorial of ${num} is ${factorial}`;
}