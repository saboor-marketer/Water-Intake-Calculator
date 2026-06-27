// DOM Elements
const weightInput = document.getElementById('weight');
const activitySelect = document.getElementById('activity');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const resultSection = document.getElementById('resultSection');
const resultMl = document.getElementById('resultMl');
const resultLiters = document.getElementById('resultLiters');
const resultGlasses = document.getElementById('resultGlasses');
const hydrationTip = document.getElementById('hydrationTip');
const weightError = document.getElementById('weightError');

// Activity level extra water values (in mL)
const activityExtraWater = {
    'sedentary': 0,
    'lightly-active': 350,
    'moderately-active': 700,
    'very-active': 1000
};

// Hydration tips based on activity level
const hydrationTips = {
    'sedentary': 'Even with low activity, staying hydrated is essential for cognitive function and overall health!',
    'lightly-active': 'Great job staying active! Remember to drink water before, during, and after light exercises.',
    'moderately-active': 'Your active lifestyle needs proper hydration. Drink water regularly throughout your workouts.',
    'very-active': 'With high activity levels, prioritize hydration before, during, and after intense workouts. Consider electrolyte drinks for prolonged exercise.'
};

// Event Listeners
calculateBtn.addEventListener('click', calculateWaterIntake);
resetBtn.addEventListener('click', resetCalculator);
weightInput.addEventListener('input', clearError);

// Calculate Water Intake
function calculateWaterIntake() {
    const weight = parseFloat(weightInput.value);
    const activity = activitySelect.value;

    // Input validation
    if (!validateInput(weight)) {
        return;
    }

    // Calculate base water requirement (35 mL per kg)
    const baseWater = weight * 35;

    // Get extra water based on activity level
    const extraWater = activityExtraWater[activity];

    // Calculate total water intake
    const totalWaterMl = baseWater + extraWater;
    const totalWaterLiters = totalWaterMl / 1000;
    const glasses = Math.round(totalWaterMl / 250);

    // Display results
    displayResults(totalWaterMl, totalWaterLiters, glasses, activity);
}

// Validate Input
function validateInput(weight) {
    if (isNaN(weight) || weight < 1 || weight > 500) {
        weightInput.classList.add('is-invalid');
        weightError.textContent = 'Please enter a valid weight (1-500 kg)';
        resultSection.style.display = 'none';
        return false;
    }
    return true;
}

// Clear Error
function clearError() {
    weightInput.classList.remove('is-invalid');
}

// Display Results
function displayResults(ml, liters, glasses, activity) {
    resultMl.textContent = `${ml.toFixed(0)} mL`;
    resultLiters.textContent = `${liters.toFixed(2)} L`;
    resultGlasses.textContent = `${glasses} Glasses (250 mL each)`;
    hydrationTip.textContent = hydrationTips[activity];
    
    resultSection.style.display = 'block';
    
    // Smooth scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset Calculator
function resetCalculator() {
    weightInput.value = '';
    activitySelect.value = 'moderately-active';
    weightInput.classList.remove('is-invalid');
    resultSection.style.display = 'none';
    
    // Focus on weight input
    weightInput.focus();
}

// Allow Enter key to trigger calculation
weightInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateWaterIntake();
    }
});
