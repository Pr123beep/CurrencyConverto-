import { currency_list } from "./codescurr.js";

// Register the service worker for offline support
if ("serviceWorker" in navigator) {
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

// DOM elements
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

    // Add a quick rotation animation for user feedback
    const switchBtn = document.getElementById("switchCurrency");
    switchBtn.style.animation = "rotate 0.5s";
    setTimeout(() => (switchBtn.style.animation = ""), 500);
};

// Handle conversion button click
btn.onclick = () => {
    const numberInputField = document.getElementById("userVal");
    const userEnteredAmount = parseFloat(numberInputField.value);

    // Add button animation
    btn.style.animation = "pulse 1s infinite";

    // Validate input
    if (userEnteredAmount <= 0 || isNaN(userEnteredAmount)) {
        btn.style.animation = ""; // Stop animation on error
        resultTag.textContent = "Error: Enter a valid amount greater than 0.";
        resultTag.style.color = "red";
    } else {
        resultTag.textContent = ""; // Clear error message
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

            // Update result UI
            resultTag.style.color = "#009688";
            resultTag.textContent = `${amount} ${fromCurrencySelectTag.value} = ${convertedAmount} ${toCurrencySelectTag.value}`;
            status.textContent = `1 ${fromCurrencySelectTag.value} = ${perRate} ${toCurrencySelectTag.value}`;

            // Reset button state
            btn.style.animation = ""; // Stop pulse animation
        })
        .catch((error) => {
            resultTag.style.color = "red";
            resultTag.textContent = `Error fetching conversion rates: ${error}`;
            btn.style.animation = ""; // Stop pulse animation
        });
}

// Fetch data from API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Keyframes for button pulse animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`, styleSheet.cssRules.length);
