{
    const amount = document.querySelector(".js-form__amount")
    const input = document.querySelector(".js-input")
    const output = document.querySelector(".js-output")
    const result = document.querySelector(".js-resultElement")

    const upDateResultText = (amount, rateresult, input, output) => {
        result.innerText = `${amount.value}${input.value}
    =${rateresult.toFixed(2)}${output.value}`

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputoutput = `${input.value}/${output.value}`;

        let rate;
        switch (inputoutput) {
            case "PLN/USD":
                rate = 0, 22;
                break;
            case "PLN/EUR":
                rate = 0, 21;
                break;
            case "USD/EUR":
                rate = 0, 95;
                break;
            case "USD/PLN":
                rate = 4.4351;
                break;
            case "EUR/USD":
                rate = 1, 05;
                break;
            case "EUR/PLN":
                rate = 4, 6821;
            default:
                rate = 1;
        }
        const amountvalue = amount.value;
        const rateresult = amountvalue * rate




        upDateResultText(amount, rateresult, input, output)
    };



    const init = () => {
        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    }
    init()

}
