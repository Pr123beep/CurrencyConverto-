import { currency_list } from "./codescurr.js";
// Check if service workers are supported
if ("serviceWorker" in navigator) {
    // Register the service worker
    navigator.serviceWorker.register("./service-worker.js")
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
} else {
    console.log("Service Workers are not supported in this browser.");
}


const fromCurrencySelectTag = document.querySelector("#fromCurrency");
const toCurrencySelectTag = document.querySelector("#toCurrency");
const resultTag = document.querySelector("#result");
const btn = document.querySelector("#btn");
const status = document.querySelector("#status");

// Populate currency dropdowns
currency_list.forEach((currency) => {
    const code = currency[0];
    const countryName = currency[1];

    // Create "From" currency option
    const newElement = document.createElement("option");
    newElement.value = code;
    newElement.textContent = `${code} - ${countryName}`;
    if (code === "USD") newElement.selected = true;
    fromCurrencySelectTag.append(newElement);

    // Clone for "To" currency
    const newElementTo = newElement.cloneNode(true);
    if (code === "INR") newElementTo.selected = true;
    toCurrencySelectTag.append(newElementTo);
});

// Handle currency switch
document.getElementById("switchCurrency").onclick = () => {
    const fromValue = fromCurrencySelectTag.value;
    fromCurrencySelectTag.value = toCurrencySelectTag.value;
    toCurrencySelectTag.value = fromValue;
};

// Handle conversion button click
btn.onclick = () => {
    const numberInputField = document.getElementById("userVal");
    const userEnteredAmount = parseFloat(numberInputField.value);

    // Validate input
    if (userEnteredAmount < 1 || isNaN(userEnteredAmount)) {
        numberInputField.style.border = "1px solid red";
        resultTag.style.color = "red";
        resultTag.textContent = "Error: Only numeric values greater than 0 are allowed.";
    } else {
        numberInputField.style.border = "1px solid gray";
        resultTag.style.color = "black";
        btn.textContent = "Processing: have patience...";
        btn.disabled = true;
        btn.style.color = "gray";
        btn.style.cursor = "not-allowed";

        convertAmount(userEnteredAmount);
    }
};

// Function to convert currency
function convertAmount(amount) {
    const apiURL = `https://v6.exchangerate-api.com/v6/64aed746af1c53de24bd4cf3/latest/USD`;

    fetchData(apiURL)
        .then((data) => {
            const fromRates = data.conversion_rates[fromCurrencySelectTag.value];
            const toRates = data.conversion_rates[toCurrencySelectTag.value];
            const perRate = (toRates / fromRates).toFixed(2);
            const convertedAmount = (amount * perRate).toFixed(2);

            // Update UI
            resultTag.style.color = "black";
            status.textContent = `1 ${fromCurrencySelectTag.value} = ${perRate} ${toCurrencySelectTag.value}`;
            resultTag.textContent = `${amount} ${fromCurrencySelectTag.value} = ${convertedAmount} ${toCurrencySelectTag.value}`;

            // Reset button state
            btn.disabled = false;
            btn.style.color = "black";
            btn.style.cursor = "pointer";
            btn.textContent = "Convert";
        })
        .catch((error) => {
            console.error(`Additional information about error: ${error}`);
        });
}

// Fetch data from API
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        resultTag.style.color = "red";
        resultTag.textContent = `Fetch API Error: ${error}`;
        throw error;
    }
}
