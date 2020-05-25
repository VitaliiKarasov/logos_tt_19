setInterval(function () {
  let todayDate = new Date();
  Date.parse()
  let currYear = todayDate.getFullYear();
  let currMonth = todayDate.getMonth() + 1;
  let currDay = todayDate.getDate();
  if (currMonth < 10) currMonth = '0' + currMonth;
  if (currDay < 10) currDay = '0' + currDay;
  document.querySelector('.data').innerHTML = `${currDay}.${currMonth}.${currYear}`;
})
setInterval(function () {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  if (h < 10) h = '0' + h
  if (m < 10) m = '0' + m
  if (s < 10) s = '0' + s
  document.querySelector('.time').innerHTML = `${h}:${m}:${s}`
}, 1000)

let offset = 0,
  paused = true;
function startStopwatch(evt) {
  if (paused) {
    paused = false;
    offset -= Date.now();
    render();
  }
}
function stopStopwatch(evt) {
  if (!paused) {
    paused = true;
    offset += Date.now();
  }
}
function resetStopwatch(evt) {
  offset = 0;
  paused = true;
  render();
}
document.querySelector(`.loop`).addEventListener(`click`, function() {
	document.querySelector(`.result`).innerHTML += document.querySelector(`.stopWatch`).innerHTML + `<br>`;
});
function format(value, scale, modulo, padding) {
  value = Math.floor(value / scale) % modulo;
  return value.toString().padStart(padding, 0);
}

function render() {
  let value = paused ? offset : Date.now() + offset;

  document.querySelector('#s_ms').textContent = format(value, 1, 1000, 3);
  document.querySelector('#s_seconds').textContent = format(value, 1000, 60, 2);
  document.querySelector('#s_minutes').textContent = format(value, 60000, 60, 2);
  document.querySelector('#s_hours').textContent = format(value, 3600000, 60, 2);

  if (!paused) {
    requestAnimationFrame(render);
  }
}
render();

let z = +document.querySelector(`.minute`).innerHTML;
let s1 = 0;
let m1 = z;
let timer = function () {
  z = +document.querySelector(`.minute`).innerHTML;
  m1 = z;
  l2 = setInterval(function () {
    if (s1 == 0) {
      m1--;
      s1 = 59;
      if (m1 < 10) m1 = '0' + m1;
    }
    s1--;
    if (s1 < 10) s1 = '0' + s1;

    document.querySelector(`.timerTime`).innerHTML = `${m1}:${s1}`;
    if (m1 == 0 && s1 == 0) {
      alert(`Time out`);
      clearTimeout(l2);
    }
  }, 1000);
};

document.querySelector(`.plus`).addEventListener(`click`, function () {
  let z = +document.querySelector(`.minute`).innerHTML;
  z++;
  document.querySelector(`.minute`).innerHTML = z;
});

document.querySelector(`.minus`).addEventListener(`click`, function () {
  let z = +document.querySelector(`.minute`).innerHTML;
  z--;
  document.querySelector(`.minute`).innerHTML = z;
});

document.querySelector(`.startTimer`).addEventListener(`click`, function () {
  timer();
  
  
  
});
document.querySelector(`.timerStop`).addEventListener(`click`, function () {
  clearTimeout(l2);
  
});
document.querySelector(`.timerReset`).addEventListener(`click`, function () {
  document.querySelector(`.timerTime`).innerHTML = `00:00`;
  z = +document.querySelector(`.minute`).innerHTML;
  s1 = 0;
  m1 = z;
  
});