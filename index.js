const keys = ['A', 'S', 'D', 'F', 'J', 'K', 'L', 'W', 'E', 'I'];
let currentKeyIndex = Math.floor(Math.random() * keys.length);

const keyDisplay = document.getElementById('key');
const messageDisplay = document.getElementById('message');

function displayNextKey() {
  keyDisplay.textContent = keys[currentKeyIndex];
}

function checkKeyPressed(event) {
  if (event.key.toUpperCase() === keys[currentKeyIndex]) {
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    displayNextKey();
    console.log('success', 'Правильно!');
  } else {
    console.log('error', 'Неправильна клавіша! Спробуйте ще раз.');
  }
}

function showMessage(type, text) {
  if (type === 'error') {
    new PNotify.error({
      text: text,
      delay: 2000
    });
  } else {
    new PNotify.success({
      text: text,
      delay: 2000
    });
  }
}

function newGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  displayNextKey();
  showMessage('info', 'Нова гра почалася!');
}

displayNextKey();
document.addEventListener('keydown', checkKeyPressed);
document.addEventListener('keypress', function(event) {
  event.preventDefault();
});


const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(document.getElementById('sales-chart'), {
  type: 'line',
  data: chartData
});