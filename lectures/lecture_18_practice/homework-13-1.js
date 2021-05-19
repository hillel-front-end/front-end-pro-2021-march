const baseInput = document.querySelector('#base');
const durationInput = document.querySelector('#duration');
const rateInput = document.querySelector('#rate');

const baseBar = document.querySelector('#base-bar');
const baseBarLabel = document.querySelector('#base-bar .bar__label');
const resultBar = document.querySelector('#result-bar');
const resultBarLabel = document.querySelector('#result-bar .bar__label');

document.forms.calculator.addEventListener('input', onChange)

function onChange() {
  const base = parseInt(baseInput.value);
  const duration = parseInt(durationInput.value);
  const rate = parseInt(rateInput.value);

  if (!base || !duration || !rate) {
    return;
  }

  const result = getResultAmount(base, rate, duration * 12);
  drawChart(base, result);
}

function getResultAmount(S, P, M) {
  // Формула для вкладов с ежемесячной капитализацией
  // https://damoney.ru/finance/slozniy-procent.php
  // S – внесенная при заключении договора сумма;
  // P – годовая % ставка;
  // M – кол-во месяцев, на которые открыли вклад;
  return S + Math.round(S * Math.pow(1 + P / 100 / 12, M) - S);
}

function drawChart(base, result) {
  const maxHeight = 200;
  baseBar.style.height = maxHeight * (base / result) + 'px';
  resultBar.style.height = maxHeight + 'px';
  baseBarLabel.innerHTML = '$' + base.toLocaleString();
  resultBarLabel.innerHTML = '$' + result.toLocaleString();
}
