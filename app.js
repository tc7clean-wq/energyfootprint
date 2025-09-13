// My Energy Footprint JavaScript Application

const applianceDatabase = {
    'tv_led_55': {
        name: '55" LED TV',
        watts: 100
    },
    'tv_led_65': {
        name: '65" LED TV',
        watts: 150
    },
    'refrigerator_old': {
        name: 'Old Refrigerator (10+ years)',
        watts: 200
    },
    'refrigerator_modern': {
        name: 'Modern Energy-Efficient Refrigerator',
        watts: 100
    },
    'microwave': {
        name: 'Microwave Oven (1000W)',
        watts: 1000
    },
    'gaming_pc': {
        name: 'Gaming PC (High-End)',
        watts: 500
    },
    'laptop': {
        name: 'Laptop Computer',
        watts: 65
    },
    'led_bulb_10w': {
        name: 'LED Light Bulb (10W)',
        watts: 10
    },
    'led_bulb_15w': {
        name: 'LED Light Bulb (15W)',
        watts: 15
    },
    'incandescent_bulb_60w': {
        name: 'Incandescent Light Bulb (60W)',
        watts: 60
    },
    'phone_charger': {
        name: 'Phone Charger',
        watts: 5
    },
    'washing_machine': {
        name: 'Washing Machine',
        watts: 500
    },
    'dryer': {
        name: 'Clothes Dryer',
        watts: 3000
    },
    'dishwasher': {
        name: 'Dishwasher',
        watts: 1800
    },
    'air_conditioner': {
        name: 'Window Air Conditioner',
        watts: 1500
    },
    'space_heater': {
        name: 'Space Heater',
        watts: 1500
    },
    'ceiling_fan': {
        name: 'Ceiling Fan',
        watts: 75
    },
    'toaster': {
        name: 'Toaster (2-slice)',
        watts: 1200
    },
    'coffee_maker': {
        name: 'Coffee Maker',
        watts: 900
    },
    'vacuum_cleaner': {
        name: 'Vacuum Cleaner',
        watts: 700
    }
};

const userAppliances = [];
const scenarioAppliances = [];

let applianceIdCounter = 1;
let isScenarioModeActive = false;

function populateApplianceDropdown() {
    const selectElement = document.getElementById('appliance-select');

    for (const [key, appliance] of Object.entries(applianceDatabase)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = appliance.name;
        selectElement.appendChild(option);
    }
}

function renderDashboard() {
    const appliancesList = document.getElementById('appliances-list');
    const totalCostElement = document.getElementById('total-cost');
    const electricityRateInput = document.getElementById('electricity-rate');
    const electricityRate = parseFloat(electricityRateInput.value) || 0.15;

    if (userAppliances.length === 0) {
        appliancesList.innerHTML = '<p class="text-gray-400 text-center py-8">No appliances added yet. Select an appliance from the control panel to get started!</p>';
        totalCostElement.textContent = '$0.00';
        return;
    }

    let totalMonthlyCost = 0;
    appliancesList.innerHTML = '';

    userAppliances.forEach(appliance => {
        const monthlyCost = (appliance.watts * appliance.hoursPerDay * 30) / 1000 * electricityRate;
        totalMonthlyCost += monthlyCost;

        const applianceDiv = document.createElement('div');
        applianceDiv.className = 'bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg mb-4';

        const mainContent = document.createElement('div');
        mainContent.className = 'flex justify-between items-center';

        // Left Side - Appliance Name
        const leftSide = document.createElement('div');
        leftSide.className = 'flex-1';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-lg font-semibold text-white';
        nameSpan.textContent = appliance.name;

        const wattsSpan = document.createElement('span');
        wattsSpan.className = 'text-sm text-gray-500 ml-2';
        wattsSpan.textContent = `(${appliance.watts}W)`;

        leftSide.appendChild(nameSpan);
        leftSide.appendChild(wattsSpan);

        // Right Side - Cost and Controls
        const rightSide = document.createElement('div');
        rightSide.className = 'flex flex-col items-end gap-2';

        // Monthly Cost - Most prominent
        const costDiv = document.createElement('div');
        costDiv.className = 'text-right';

        const costSpan = document.createElement('span');
        costSpan.className = 'text-cyan-300 font-bold text-2xl';
        costSpan.textContent = `$${monthlyCost.toFixed(2)}`;

        const perMonthSpan = document.createElement('span');
        perMonthSpan.className = 'text-gray-500 text-sm ml-1';
        perMonthSpan.textContent = '/mo';

        costDiv.appendChild(costSpan);
        costDiv.appendChild(perMonthSpan);

        // Controls Container
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center gap-3';

        // Hours Input Container
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'flex items-center gap-1 bg-gray-700 rounded px-2 py-1';

        const hoursInput = document.createElement('input');
        hoursInput.type = 'number';
        hoursInput.value = appliance.hoursPerDay;
        hoursInput.min = '0';
        hoursInput.max = '24';
        hoursInput.step = '0.5';
        hoursInput.className = 'bg-transparent text-white w-12 text-center focus:outline-none';
        hoursInput.dataset.applianceId = appliance.id;

        const hoursLabel = document.createElement('span');
        hoursLabel.className = 'text-xs text-gray-400';
        hoursLabel.textContent = 'hrs/day';

        hoursInput.addEventListener('change', function() {
            const newHours = parseFloat(this.value);
            if (newHours >= 0 && newHours <= 24) {
                const applianceToUpdate = userAppliances.find(a => a.id === parseInt(this.dataset.applianceId));
                if (applianceToUpdate) {
                    applianceToUpdate.hoursPerDay = newHours;
                    renderDashboard();
                }
            }
        });

        hoursContainer.appendChild(hoursInput);
        hoursContainer.appendChild(hoursLabel);

        // Remove Button - Subtle X
        const removeButton = document.createElement('button');
        removeButton.className = 'text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded p-1 transition-all';
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>`;
        removeButton.title = 'Remove appliance';
        removeButton.dataset.applianceId = appliance.id;

        removeButton.addEventListener('click', function() {
            const idToRemove = parseInt(this.dataset.applianceId);
            const index = userAppliances.findIndex(a => a.id === idToRemove);
            if (index !== -1) {
                userAppliances.splice(index, 1);
                renderDashboard();
            }
        });

        controlsDiv.appendChild(hoursContainer);
        controlsDiv.appendChild(removeButton);

        rightSide.appendChild(costDiv);
        rightSide.appendChild(controlsDiv);

        mainContent.appendChild(leftSide);
        mainContent.appendChild(rightSide);

        applianceDiv.appendChild(mainContent);
        appliancesList.appendChild(applianceDiv);
    });

    totalCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;
}

function renderScenarioDashboard() {
    const scenarioAppliancesList = document.getElementById('scenario-appliances-list');
    const electricityRateInput = document.getElementById('electricity-rate');
    const electricityRate = parseFloat(electricityRateInput.value) || 0.15;

    if (scenarioAppliances.length === 0) {
        scenarioAppliancesList.innerHTML = '<p class="text-gray-400 text-center py-8">Add appliances to your new plan to see potential savings!</p>';
        return;
    }

    scenarioAppliancesList.innerHTML = '';

    scenarioAppliances.forEach(appliance => {
        const monthlyCost = (appliance.watts * appliance.hoursPerDay * 30) / 1000 * electricityRate;

        const applianceDiv = document.createElement('div');
        applianceDiv.className = 'bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg mb-4';

        const mainContent = document.createElement('div');
        mainContent.className = 'flex justify-between items-center';

        // Left Side - Appliance Name
        const leftSide = document.createElement('div');
        leftSide.className = 'flex-1';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-lg font-semibold text-white';
        nameSpan.textContent = appliance.name;

        const wattsSpan = document.createElement('span');
        wattsSpan.className = 'text-sm text-gray-500 ml-2';
        wattsSpan.textContent = `(${appliance.watts}W)`;

        leftSide.appendChild(nameSpan);
        leftSide.appendChild(wattsSpan);

        // Right Side - Cost and Controls
        const rightSide = document.createElement('div');
        rightSide.className = 'flex flex-col items-end gap-2';

        // Monthly Cost - Most prominent
        const costDiv = document.createElement('div');
        costDiv.className = 'text-right';

        const costSpan = document.createElement('span');
        costSpan.className = 'text-cyan-300 font-bold text-2xl';
        costSpan.textContent = `$${monthlyCost.toFixed(2)}`;

        const perMonthSpan = document.createElement('span');
        perMonthSpan.className = 'text-gray-500 text-sm ml-1';
        perMonthSpan.textContent = '/mo';

        costDiv.appendChild(costSpan);
        costDiv.appendChild(perMonthSpan);

        // Controls Container
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center gap-3';

        // Hours Input Container
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'flex items-center gap-1 bg-gray-700 rounded px-2 py-1';

        const hoursInput = document.createElement('input');
        hoursInput.type = 'number';
        hoursInput.value = appliance.hoursPerDay;
        hoursInput.min = '0';
        hoursInput.max = '24';
        hoursInput.step = '0.5';
        hoursInput.className = 'bg-transparent text-white w-12 text-center focus:outline-none';
        hoursInput.dataset.applianceId = appliance.id;

        const hoursLabel = document.createElement('span');
        hoursLabel.className = 'text-xs text-gray-400';
        hoursLabel.textContent = 'hrs/day';

        hoursInput.addEventListener('change', function() {
            const newHours = parseFloat(this.value);
            if (newHours >= 0 && newHours <= 24) {
                const applianceToUpdate = scenarioAppliances.find(a => a.id === parseInt(this.dataset.applianceId));
                if (applianceToUpdate) {
                    applianceToUpdate.hoursPerDay = newHours;
                    renderScenarioDashboard();
                    updateSavingsSummary();
                }
            }
        });

        hoursContainer.appendChild(hoursInput);
        hoursContainer.appendChild(hoursLabel);

        // Remove Button - Subtle X
        const removeButton = document.createElement('button');
        removeButton.className = 'text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded p-1 transition-all';
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>`;
        removeButton.title = 'Remove appliance';
        removeButton.dataset.applianceId = appliance.id;

        removeButton.addEventListener('click', function() {
            const idToRemove = parseInt(this.dataset.applianceId);
            const index = scenarioAppliances.findIndex(a => a.id === idToRemove);
            if (index !== -1) {
                scenarioAppliances.splice(index, 1);
                renderScenarioDashboard();
                updateSavingsSummary();
            }
        });

        controlsDiv.appendChild(hoursContainer);
        controlsDiv.appendChild(removeButton);

        rightSide.appendChild(costDiv);
        rightSide.appendChild(controlsDiv);

        mainContent.appendChild(leftSide);
        mainContent.appendChild(rightSide);

        applianceDiv.appendChild(mainContent);
        scenarioAppliancesList.appendChild(applianceDiv);
    });
}

function updateSavingsSummary() {
    const electricityRateInput = document.getElementById('electricity-rate');
    const electricityRate = parseFloat(electricityRateInput.value) || 0.15;

    // Calculate current cost
    let currentCost = 0;
    userAppliances.forEach(appliance => {
        currentCost += (appliance.watts * appliance.hoursPerDay * 30) / 1000 * electricityRate;
    });

    // Calculate scenario cost
    let scenarioCost = 0;
    scenarioAppliances.forEach(appliance => {
        scenarioCost += (appliance.watts * appliance.hoursPerDay * 30) / 1000 * electricityRate;
    });

    // Calculate savings
    const monthlySavings = currentCost - scenarioCost;
    const yearlySavings = monthlySavings * 12;

    // Update display elements
    document.getElementById('current-cost-display').textContent = `$${currentCost.toFixed(2)}`;
    document.getElementById('new-cost-display').textContent = `$${scenarioCost.toFixed(2)}`;
    document.getElementById('monthly-savings-display').textContent = `$${monthlySavings.toFixed(2)}`;
    document.getElementById('yearly-savings-display').textContent = `$${yearlySavings.toFixed(2)} per year`;

    // Change color based on savings (green for savings, red for increased cost)
    const monthlySavingsElement = document.getElementById('monthly-savings-display');
    if (monthlySavings > 0) {
        monthlySavingsElement.className = 'text-2xl font-bold text-green-400';
    } else if (monthlySavings < 0) {
        monthlySavingsElement.className = 'text-2xl font-bold text-red-400';
    } else {
        monthlySavingsElement.className = 'text-2xl font-bold text-gray-400';
    }
}

function toggleScenarioMode() {
    isScenarioModeActive = !isScenarioModeActive;
    console.log('Scenario mode active:', isScenarioModeActive);

    const toggleButton = document.getElementById('toggle-scenario-btn');
    const currentDashboard = document.getElementById('current-dashboard');
    const scenarioDashboard = document.getElementById('scenario-dashboard');
    const savingsSummary = document.getElementById('savings-summary');

    if (isScenarioModeActive) {
        // Activate scenario mode
        scenarioAppliances.length = 0;
        if (userAppliances.length > 0) {
            scenarioAppliances.push(...JSON.parse(JSON.stringify(userAppliances)));
        }

        // Update layout
        currentDashboard.classList.remove('lg:col-span-3');
        currentDashboard.classList.add('lg:col-span-1');
        scenarioDashboard.classList.remove('hidden');
        savingsSummary.classList.remove('hidden');

        // Update button text
        toggleButton.textContent = 'Cancel Plan';

        // Render both dashboards
        renderDashboard();
        renderScenarioDashboard();
        updateSavingsSummary();
    } else {
        // Deactivate scenario mode
        currentDashboard.classList.remove('lg:col-span-1');
        currentDashboard.classList.add('lg:col-span-3');
        scenarioDashboard.classList.add('hidden');
        savingsSummary.classList.add('hidden');

        // Update button text
        toggleButton.textContent = 'Plan My Savings';

        // Render current dashboard
        renderDashboard();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateApplianceDropdown();

    const addButton = document.getElementById('add-appliance-btn');
    const selectElement = document.getElementById('appliance-select');
    const electricityRateInput = document.getElementById('electricity-rate');
    const toggleScenarioButton = document.getElementById('toggle-scenario-btn');

    addButton.addEventListener('click', function() {
        const selectedKey = selectElement.value;

        if (selectedKey && applianceDatabase[selectedKey]) {
            const appliance = applianceDatabase[selectedKey];

            const newAppliance = {
                id: applianceIdCounter++,
                name: appliance.name,
                watts: appliance.watts,
                hoursPerDay: 4
            };

            if (isScenarioModeActive) {
                scenarioAppliances.push(newAppliance);
                renderScenarioDashboard();
                updateSavingsSummary();
            } else {
                userAppliances.push(newAppliance);
                renderDashboard();
            }

            selectElement.value = '';
        }
    });

    electricityRateInput.addEventListener('change', function() {
        if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
            renderDashboard();
            if (isScenarioModeActive) {
                renderScenarioDashboard();
                updateSavingsSummary();
            }
        }
    });

    toggleScenarioButton.addEventListener('click', toggleScenarioMode);

    // Scenario control buttons
    const copyCurrentButton = document.getElementById('copy-current-btn');
    const clearScenarioButton = document.getElementById('clear-scenario-btn');

    copyCurrentButton.addEventListener('click', function() {
        scenarioAppliances.length = 0;
        scenarioAppliances.push(...JSON.parse(JSON.stringify(userAppliances)));
        renderScenarioDashboard();
        updateSavingsSummary();
    });

    clearScenarioButton.addEventListener('click', function() {
        scenarioAppliances.length = 0;
        renderScenarioDashboard();
        updateSavingsSummary();
    });

    // Initialize the display
    renderDashboard();
});