{
    const amount = document.querySelector(".js-form__amount")
    const input = document.querySelector(".js-input")
    const output = document.querySelector(".js-output")
    
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
    
    const updateResultText = (amount, result, input, output) => {
        const resultElement = document.querySelector(".js-resultElement")
        resultElement.innerText = `${amount.value}${input.value}
    =${result.toFixed(2)}${output.value}`

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyPair = `${input.value}/${output.value}`;

        const rate = calculateResult(currencyPair)
        
        const amountvalue = amount.value;
        const result = amountvalue * rate




        updateResultText(amount, result, input, output)
    };



    const init = () => {
        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    }
    init()

}
