const URL = "https://api.frankfurter.app/latest?from=USD&to=EUR";

async function fetchData() {
  console.log("in function. starting fecth");
  const response = await fetch(URL);
  console.log("going for response.json()");
  const data = await response.json();
  console.log(data);
  document.getElementById("from").innerHTML = "USD";
  document.getElementById("to").innerHTML = "EUR";
  document.getElementById("rate").innerHTML = data.rates["EUR"];
}
fetchData();
