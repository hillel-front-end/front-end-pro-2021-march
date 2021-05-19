console.log('homework');

const initialAmount = document.querySelector('#initial-amount');
const duration = document.querySelector('#duration');
const percents = document.querySelector('#percents');


const initialBar = document.querySelector('#initial-amount-bar');
const resultBar = document.querySelector('#result-amount-bar');


initialAmount.addEventListener('input', handleInitialAmountChange);
percents.addEventListener('input', handlePercentsChange);
duration.addEventListener('input', handleDurationChange);

let initialAmountValue;
let percentsValue;
let durationValue;

function updateBars() {
  const amountInYears = initialAmountValue + percentsValue / 100 * initialAmountValue * durationValue;
  const k = (amountInYears / initialAmountValue * 100 - 100) / 100;

  const maxHeight = 200;
  initialBar.style.height = maxHeight - maxHeight * k + 'px';
  resultBar.style.height = maxHeight + 'px';
}

function handleInitialAmountChange(e) {
  const value = parseInt(e.target.value);
  initialAmountValue = value;
  updateBars();
}

function handlePercentsChange(e) {
  const value = parseInt(e.target.value);
  percentsValue = value;
  updateBars();

}

function handleDurationChange(e) {
  const value = parseInt(e.target.value);
  durationValue = value;
  updateBars();
}
