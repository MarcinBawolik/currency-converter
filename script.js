let amount = document.querySelector(".js-form__amount")
let input = document.querySelector(".js-input")
let output = document.querySelector(".js-output")
let button = document.querySelector(".js-form__button")
let result = document.querySelector(".js-resultElement")
let form = document.querySelector(".js-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputoutput = `${input.value}/${output.value}`;

    let rate;
    switch (inputoutput) {
        case "PLN/USD":
            rate = 0,22;
            break;
        case "PLN/EUR":
            rate = 0,21;
            break;
        case "USD/EUR":
            rate = 0,95;
            break;
        case "USD/PLN":
            rate = 4.4351;
            break;
        case "EUR/USD":
            rate = 1,05;
            break;
        case "EUR/PLN":
            rate = 4,6821;
        default:
            rate = 1;
    }
    let amountvalue = amount.value;
    let rateresult = amountvalue * rate
    
    
result.innerText = `${amount.value}${input.value}
=${rateresult.toFixed(2)}${output.value}`

});
