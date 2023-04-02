function processNumber() {
  const myInput = document.querySelector("#number-input").value;
  const numbers = Array.from(myInput, Number);
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = `<p>Цифры числа: ${numbers.join(", ")}</p>`;
  const numDigits = numbers.length;

  const sum = numbers.reduce((a, b) => a + b, 0);
  outputDiv.innerHTML += `<p>Количество цифр: ${numDigits}</p>`;
  outputDiv.innerHTML += `<p>Сумма цифр: ${sum}</p>`;
  const reversedDigits = numbers.reverse();
  outputDiv.innerHTML += `<p>Число с обратным порядком цифр: ${reversedDigits.join(
    ""
  )}</p>`;
}
