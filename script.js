// Initial Values
let totalGoal = 11010383;
let balance = 1278910;
let addAmount = 13500;

// Elements
const displayTotalGoalEl = document.getElementById('display-total-goal');
const displayBalanceEl = document.getElementById('display-balance');
const displayRemainingEl = document.getElementById('display-remaining');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');

// Settings Elements
const settingsTotalGoalEl = document.getElementById('settings-total-goal');
const settingsAddAmountEl = document.getElementById('settings-add-amount');
const settingsBalanceEl = document.getElementById('settings-balance');
const applySettingsBtn = document.getElementById('apply-settings-btn');

// Update the displayed values
function updateUI() {
  const remaining = totalGoal - balance;
  displayTotalGoalEl.textContent = totalGoal.toLocaleString();
  displayBalanceEl.textContent = balance.toLocaleString();
  displayRemainingEl.textContent = remaining.toLocaleString();
}

// Increment the balance
function addIncrement() {
  balance += addAmount;
  if (balance >= totalGoal) {
    alert("Congratulations! You've reached your goal!");
    balance = totalGoal; // Cap the balance at the goal
  }
  updateUI();
}

// Reset the balance
function resetBalance() {
  balance = 1278910; // Reset to the initial balance
  updateUI();
}

// Apply settings
function applySettings() {
  totalGoal = parseFloat(settingsTotalGoalEl.value) || totalGoal;
  addAmount = parseFloat(settingsAddAmountEl.value) || addAmount;
  balance = parseFloat(settingsBalanceEl.value) || balance;
  updateUI();
}

// Event Listeners
addBtn.addEventListener('click', addIncrement);
resetBtn.addEventListener('click', resetBalance);
applySettingsBtn.addEventListener('click', applySettings);

// Listen for Numpad 1 key (Key Code: 97)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Numpad1') {
    addIncrement();
  }
});

// Initialize UI
updateUI();
