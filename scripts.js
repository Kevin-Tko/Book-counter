let passengerNum = document.getElementById("count");
let passengerCount = 0;
function increament() {
  passengerCount += 1;
  passengerNum.textContent = passengerCount;
}

let savedData = document.getElementById('saveEL');
function save() {
  let savedNum = passengerCount;
  savedData.textContent += passengerCount + ' - ';
  passengerNum.textContent = 0;
  passengerCount = 0;
}
