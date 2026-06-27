# 💧 Water Intake Calculator

A simple and intuitive web application that calculates your recommended daily water intake based on your weight and activity level.

## 📋 Project Overview

This Water Intake Calculator helps users stay hydrated by providing personalized hydration goals. Simply enter your weight and activity level to get your recommended daily water intake displayed in multiple formats.

## 🛠️ Tech Stack

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6)** - Calculation logic and interactivity
- **Bootstrap 5** - UI framework for responsive components

## ✨ Features

- ✅ Enter weight in kilograms (kg)
- ✅ Select activity level from four options:
  - Sedentary
  - Lightly Active
  - Moderately Active
  - Very Active
- ✅ Calculate recommended daily water intake instantly
- ✅ Display results in three formats:
  - Milliliters (mL)
  - Liters (L)
  - Number of 250 mL glasses
- ✅ Personalized hydration tips based on activity level
- ✅ Input validation with error messages
- ✅ Reset button to clear all inputs
- ✅ Fully responsive design for all devices
- ✅ Modern gradient UI with smooth animations

## 💧 Calculation Formula

### Base Water Requirement
```
Water (mL) = Weight (kg) × 35
```

### Additional Water Based on Activity

| Activity Level | Extra Water |
|----------------|-------------|
| Sedentary | +0 mL |
| Lightly Active | +350 mL |
| Moderately Active | +700 mL |
| Very Active | +1000 mL |

### Example Calculation

**Input:**
- Weight: 70 kg
- Activity: Moderately Active

**Calculation:**
- Base Water = 70 × 35 = 2450 mL
- Extra Water = 700 mL
- Total = 3150 mL

**Output:**
- 💧 3150 mL
- 💧 3.15 Liters
- 🥛 13 Glasses (250 mL each)

## 🚀 How to Use

1. **Open the Application**
   - Simply open `index.html` in any modern web browser

2. **Enter Your Weight**
   - Input your weight in kilograms in the weight field
   - Valid range: 1-500 kg

3. **Select Activity Level**
   - Choose your activity level from the dropdown menu
   - Options range from Sedentary to Very Active

4. **Calculate**
   - Click the "Calculate Water Intake" button
   - Or press Enter after entering your weight

5. **View Results**
   - See your daily water intake in mL, Liters, and glasses
   - Read personalized hydration tips for your activity level

6. **Reset (Optional)**
   - Click the "Reset" button to clear all inputs and start over

## 📁 Project Structure

```
Water Intake Calculator/
├── index.html      # Main HTML file with form structure
├── styles.css      # Custom CSS styling
├── script.js       # JavaScript calculation logic
└── README.md       # Project documentation
```

## 🎨 UI Features

- Modern gradient background (purple theme)
- Clean card-based layout
- Responsive design for mobile, tablet, and desktop
- Smooth hover animations on buttons and result cards
- Input validation with visual feedback
- Smooth scroll to results after calculation

## 📚 JavaScript Concepts Used

- Form handling and DOM manipulation
- Number calculations and arithmetic operations
- Conditional statements for activity levels
- Event listeners (click, input, keypress)
- Input validation
- Number formatting (toFixed())
- Object-based data storage for activity multipliers and tips

## 🌐 Browser Compatibility

Works on all modern web browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📱 Responsive Design

The calculator is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Customization

You can easily customize the calculator by modifying:

- **Activity multipliers** in `script.js` (activityExtraWater object)
- **Hydration tips** in `script.js` (hydrationTips object)
- **Glass size** (currently set to 250 mL in the calculation)
- **Colors and styling** in `styles.css`
- **Base water formula** in the calculateWaterIntake function

## 📝 Notes

- The calculation provides general guidelines and should not replace professional medical advice
- Individual hydration needs may vary based on factors like climate, health conditions, and medications
- Always consult a healthcare professional for personalized hydration recommendations

## 🎯 Future Enhancements

Potential features for future versions:
- Water tracking throughout the day
- Reminder notifications
- Multiple unit options (lbs, oz)
- History of calculations
- Export/print functionality
- Dark mode toggle

---

**Stay Hydrated! 💧**
