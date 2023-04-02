function processNumber() {
  const input = document.getElementById("number-input").value;
  const digits = Array.from(String(input), Number);

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<p>Цифры числа: ${digits.join(", ")}</p>`;

  const numDigits = digits.length;
  const sumDigits = digits.reduce((a, b) => a + b, 0);
  outputDiv.innerHTML += `<p>Количество цифр: ${numDigits}</p>`;
  outputDiv.innerHTML += `<p>Сумма цифр: ${sumDigits}</p>`;

  const reversedDigits = digits.reverse();
  outputDiv.innerHTML += `<p>Число с обратным порядком цифр: ${reversedDigits.join(
    ""
  )}</p>`;
}
