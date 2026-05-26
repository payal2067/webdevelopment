async function ConvertCurrency() {
  const Amount = document.getElementById("Amount").value;

  const from = document.getElementById("country").value.split(",")[0];

  const to = document.getElementById("othercountry").value.split(",")[0];

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

document.getElementById("country").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag1").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});

document.getElementById("othercountry").addEventListener("change", function () {
  const code = this.value.split(",")[1];

  document.getElementById("flag2").src =
    `https://flagsapi.com/${code}/flat/64.png`;
});
