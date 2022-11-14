const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

async function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    const res = await fetch('https://open.exchangerate-api.com/v6/latest');
    // console.log('res', res);
    const data = await res.json();
    // console.log('data', data);
    const rate = data.rates[currency_two] / data.rates[currency_one];
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();

// swap.addEventListener('click', async () => {
//     const currency_one = currencyEl_two.value;
//     const currency_two = currencyEl_one.value;
//     const res = await fetch('https://open.exchangerate-api.com/v6/latest');
//     // console.log('res', res);
//     const data = await res.json();
//     // console.log('data', data);
//     const rate = data.rates[currency_two] / data.rates[currency_one];
//     rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
//     amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
//     currencyEl_one.value = currency_one;
//     currencyEl_two.value = currency_two
// })

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});