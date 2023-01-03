{

    const calculateResult = (currencyPair) => {
        switch (currencyPair) {
            case "PLN/USD":
                return 0.22;
            case "PLN/EUR":
                return 0.21;
            case "USD/EUR":
                return 0.95;
            case "USD/PLN":
                return 4.4351;
            case "EUR/USD":
                return 1.05;
            case "EUR/PLN":
                return 4.6821;
            default:
                return 1;
        }
    }

    const updateResultText = (amountElement, result, inputCurrencyElement, outputCurrencyElement) => {
        
        
        const resultElement = document.querySelector(".js-resultElement")
        resultElement.innerText = `${amountElement.value}${inputCurrencyElement.value}
    =${result.toFixed(2)}${outputCurrencyElement.value}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__amount")
        const inputCurrencyElement = document.querySelector(".js-input")
        const outputCurrencyElement = document.querySelector(".js-output")

        const currencyPair = `${inputCurrencyElement.value}/${outputCurrencyElement.value}`;
        const rate = calculateResult(currencyPair)
        const amountValue = +amountElement.value;
        const result = amountValue * rate

        updateResultText(amountElement, result, inputCurrencyElement, outputCurrencyElement)
    };

    const init = () => {
        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    }
    init()

}
