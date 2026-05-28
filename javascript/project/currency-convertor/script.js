async function ConvertCurrency() {
  const Amount = document.getElementById("Amount").value;

  const from = document.getElementById("country1").value.split(",")[0];

  const to = document.getElementById("country2").value.split(",")[0];

  if (!Amount || Amount <= 0) {
    alert("Enter valid Amount");

    return;
  }

  const API = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  const response = await fetch(API);

  const data = await response.json();

  const rate = data[from][to];

  const finalAmount = Amount * rate;

  document.getElementById("result").innerText =
    `${finalAmount.toFixed(2)} ${to.toUpperCase()}`;

  document.getElementById("rateText").innerText =
    `1 ${from.toUpperCase()} = ${rate.toFixed(2)} ${to.toUpperCase()}`;
}

document.getElementById("country1").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag-1").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});

document.getElementById("country2").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag-2").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});
