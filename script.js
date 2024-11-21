import { currency_list } from "./codescurr.js";

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

const fromCurrencySelectTag = document.querySelector("#fromCurrency");
const toCurrencySelectTag = document.querySelector("#toCurrency");
const resultTag = document.querySelector("#result");
const btn = document.querySelector("#btn");
const status = document.querySelector("#status");

currency_list.forEach((currency) => {
    const code = currency[0];
    const countryName = currency[1];

    const newElement = document.createElement("option");
    newElement.value = code;
    newElement.textContent = `${code} - ${countryName}`;
    fromCurrencySelectTag.append(newElement);

    const newElementTo = newElement.cloneNode(true);
    toCurrencySelectTag.append(newElementTo);
});

function loadLastUsedPreferences() {
    const lastUsed = JSON.parse(localStorage.getItem("lastUsed"));
    if (lastUsed) {
        fromCurrencySelectTag.value = lastUsed.fromCurrency || "USD";
        toCurrencySelectTag.value = lastUsed.toCurrency || "INR";
        document.getElementById("userVal").value = lastUsed.amount || "";
    } else {
        fromCurrencySelectTag.value = "USD"; // Default
        toCurrencySelectTag.value = "INR"; // Default
    }
}

function saveLastUsedPreferences(amount) {
    localStorage.setItem(
        "lastUsed",
        JSON.stringify({
            fromCurrency: fromCurrencySelectTag.value,
            toCurrency: toCurrencySelectTag.value,
            amount: amount,
        })
    );
}

document.getElementById("switchCurrency").onclick = () => {
    const fromValue = fromCurrencySelectTag.value;
    fromCurrencySelectTag.value = toCurrencySelectTag.value;
    toCurrencySelectTag.value = fromValue;

    const switchBtn = document.getElementById("switchCurrency");
    switchBtn.style.animation = "rotate 0.5s";
    setTimeout(() => (switchBtn.style.animation = ""), 500);
};

btn.onclick = () => {
    const numberInputField = document.getElementById("userVal");
    const userEnteredAmount = parseFloat(numberInputField.value);

    btn.style.animation = "pulse 1s infinite";

    if (userEnteredAmount <= 0 || isNaN(userEnteredAmount)) {
        btn.style.animation = ""; // Stop animation on error
        resultTag.textContent = "Error: Enter a valid amount greater than 0.";
        resultTag.style.color = "red";
    } else {
        resultTag.textContent = ""; // Clear error message
        saveLastUsedPreferences(userEnteredAmount); // Save preferences
        convertAmount(userEnteredAmount);
    }
};

function convertAmount(amount) {
    const apiURL = `https://v6.exchangerate-api.com/v6/64aed746af1c53de24bd4cf3/latest/USD`;

    fetchData(apiURL)
        .then((data) => {
            const fromRates = data.conversion_rates[fromCurrencySelectTag.value];
            const toRates = data.conversion_rates[toCurrencySelectTag.value];
            const perRate = (toRates / fromRates).toFixed(2);
            const convertedAmount = (amount * perRate).toFixed(2);

            resultTag.style.color = "#009688";
            resultTag.textContent = `${amount} ${fromCurrencySelectTag.value} = ${convertedAmount} ${toCurrencySelectTag.value}`;
            status.textContent = `1 ${fromCurrencySelectTag.value} = ${perRate} ${toCurrencySelectTag.value}`;

            btn.style.animation = ""; // Stop pulse animation
        })
        .catch((error) => {
            resultTag.style.color = "red";
            resultTag.textContent = `Error fetching conversion rates: ${error}`;
            btn.style.animation = ""; // Stop pulse animation
        });
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

document.addEventListener("DOMContentLoaded", loadLastUsedPreferences);

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
