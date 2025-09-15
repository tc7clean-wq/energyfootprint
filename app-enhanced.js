// Enhanced Energy Footprint Application with Device Database Integration

let selectedDevices = [];
let deviceSearchResults = [];
let currentDeviceDatabase = {};

// Merge legacy database with new comprehensive database
function initializeDatabase() {
    // Start with legacy database
    currentDeviceDatabase = { ...applianceDatabase };

    // If new database is available, merge it
    if (typeof deviceDatabase !== 'undefined') {
        // Flatten the new database structure
        for (const category in deviceDatabase) {
            for (const deviceId in deviceDatabase[category]) {
                currentDeviceDatabase[deviceId] = deviceDatabase[category][deviceId];
            }
        }
    }
}

// Enhanced search function
function searchForDevices(query) {
    const results = [];
    const searchTerm = query.toLowerCase().trim();

    if (searchTerm.length < 2) return results;

    // Search in current database
    for (const deviceId in currentDeviceDatabase) {
        const device = currentDeviceDatabase[deviceId];
        const searchableText = `${device.name} ${device.category} ${device.type || ''} ${device.year || ''}`.toLowerCase();

        if (searchableText.includes(searchTerm)) {
            results.push({
                id: deviceId,
                ...device,
                relevance: calculateRelevance(searchableText, searchTerm)
            });
        }
    }

    // Sort by relevance and year (newer first)
    results.sort((a, b) => {
        if (a.relevance !== b.relevance) return b.relevance - a.relevance;
        return (b.year || 0) - (a.year || 0);
    });

    return results.slice(0, 50); // Limit to 50 results
}

// Calculate search relevance
function calculateRelevance(text, searchTerm) {
    let score = 0;
    if (text.startsWith(searchTerm)) score += 10;
    if (text.includes(` ${searchTerm}`)) score += 5;
    if (text.includes(searchTerm)) score += 1;
    return score;
}

// Initialize device search interface
function initializeDeviceSearch() {
    initializeDatabase();

    const searchInput = document.getElementById('appliance-search');
    const selectElement = document.getElementById('appliance-select');
    const resultsCount = document.getElementById('results-count');
    const categoryButtons = document.getElementById('category-buttons');

    // Enhanced search handler
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value;

            if (query.length >= 2) {
                deviceSearchResults = searchForDevices(query);
                updateDeviceDropdown(deviceSearchResults);

                // Update results count
                if (resultsCount) {
                    resultsCount.textContent = `Found ${deviceSearchResults.length} devices`;
                    resultsCount.style.display = deviceSearchResults.length > 0 ? 'block' : 'none';
                }
            } else {
                // Show categories when no search
                showDeviceCategories();
            }
        });

        // Clear search
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                showDeviceCategories();
            }
        });
    }

    // Initialize with categories
    showDeviceCategories();
}

// Show device categories
function showDeviceCategories() {
    const selectElement = document.getElementById('appliance-select');
    const resultsCount = document.getElementById('results-count');

    if (!selectElement) return;

    selectElement.innerHTML = '<option value="">Select a device...</option>';

    // Group devices by category
    const categories = {};
    for (const deviceId in currentDeviceDatabase) {
        const device = currentDeviceDatabase[deviceId];
        const category = device.category || 'Other';
        if (!categories[category]) categories[category] = [];
        categories[category].push({ id: deviceId, ...device });
    }

    // Sort categories and add to dropdown
    const sortedCategories = Object.keys(categories).sort();

    sortedCategories.forEach(category => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;

        // Sort devices within category by name
        categories[category].sort((a, b) => a.name.localeCompare(b.name));

        // Add recent models first (if year data available)
        const recent = categories[category].filter(d => d.year && d.year >= 2020);
        const older = categories[category].filter(d => !d.year || d.year < 2020);

        [...recent, ...older].forEach(device => {
            const option = document.createElement('option');
            option.value = device.id;
            option.textContent = device.name + (device.year ? ` (${device.year})` : '');
            option.dataset.watts = device.watts;
            option.dataset.category = device.category;
            optgroup.appendChild(option);
        });

        selectElement.appendChild(optgroup);
    });

    if (resultsCount) {
        resultsCount.textContent = `${Object.keys(currentDeviceDatabase).length} devices available`;
        resultsCount.style.display = 'block';
    }
}

// Update device dropdown with search results
function updateDeviceDropdown(results) {
    const selectElement = document.getElementById('appliance-select');
    if (!selectElement) return;

    selectElement.innerHTML = '<option value="">Select from search results...</option>';

    // Group by category for better organization
    const grouped = {};
    results.forEach(device => {
        const category = device.category || 'Other';
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(device);
    });

    Object.keys(grouped).forEach(category => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;

        grouped[category].forEach(device => {
            const option = document.createElement('option');
            option.value = device.id;
            option.textContent = `${device.name}${device.year ? ` (${device.year})` : ''} - ${device.watts}W`;
            option.dataset.watts = device.watts;
            option.dataset.category = device.category;
            option.dataset.year = device.year || '';
            optgroup.appendChild(option);
        });

        selectElement.appendChild(optgroup);
    });
}

// Add quick category buttons
function addCategoryButtons() {
    const container = document.getElementById('category-buttons');
    if (!container) return;

    const mainCategories = [
        { name: 'TVs', icon: '📺', category: 'tvs' },
        { name: 'Computers', icon: '💻', category: 'computers' },
        { name: 'Kitchen', icon: '🍳', category: 'kitchen' },
        { name: 'Laundry', icon: '👕', category: 'laundry' },
        { name: 'HVAC', icon: '❄️', category: 'hvac' },
        { name: 'Gaming', icon: '🎮', category: 'gaming' },
        { name: 'Smart Home', icon: '🏠', category: 'smart_home' },
        { name: 'Office', icon: '🖨️', category: 'office' }
    ];

    container.innerHTML = '';
    mainCategories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'category-btn px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors';
        button.innerHTML = `${cat.icon} ${cat.name}`;
        button.onclick = () => filterByCategory(cat.category);
        container.appendChild(button);
    });
}

// Filter devices by category
function filterByCategory(categoryKey) {
    const searchInput = document.getElementById('appliance-search');
    if (searchInput) {
        searchInput.value = '';
    }

    // Get devices from specific category if using new database
    let categoryDevices = [];
    if (typeof deviceDatabase !== 'undefined' && deviceDatabase[categoryKey]) {
        for (const deviceId in deviceDatabase[categoryKey]) {
            categoryDevices.push({
                id: deviceId,
                ...deviceDatabase[categoryKey][deviceId]
            });
        }
    } else {
        // Fallback to searching by category name
        for (const deviceId in currentDeviceDatabase) {
            const device = currentDeviceDatabase[deviceId];
            if (device.category && device.category.toLowerCase().includes(categoryKey.toLowerCase())) {
                categoryDevices.push({
                    id: deviceId,
                    ...device
                });
            }
        }
    }

    // Sort by year (newest first) then by name
    categoryDevices.sort((a, b) => {
        if (a.year && b.year && a.year !== b.year) {
            return b.year - a.year;
        }
        return a.name.localeCompare(b.name);
    });

    updateDeviceDropdown(categoryDevices);

    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `${categoryDevices.length} devices in category`;
        resultsCount.style.display = 'block';
    }
}

// Enhanced add device function
function addDeviceToList() {
    const selectElement = document.getElementById('appliance-select');
    const selectedOption = selectElement.options[selectElement.selectedIndex];

    if (!selectedOption || !selectedOption.value) {
        alert('Please select a device');
        return;
    }

    const device = currentDeviceDatabase[selectedOption.value];
    if (!device) {
        alert('Device not found');
        return;
    }

    // Add to selected devices
    selectedDevices.push({
        id: selectedOption.value,
        name: device.name,
        watts: device.watts,
        category: device.category,
        year: device.year,
        hours: 1 // Default hours
    });

    // Update display
    updateDeviceList();
    updateCalculations();

    // Reset search
    const searchInput = document.getElementById('appliance-search');
    if (searchInput) searchInput.value = '';
    showDeviceCategories();
}

// Update device list display
function updateDeviceList() {
    const container = document.getElementById('appliances-list');
    if (!container) return;

    container.innerHTML = '';

    selectedDevices.forEach((device, index) => {
        const deviceElement = document.createElement('div');
        deviceElement.className = 'appliance-item bg-gray-700 rounded-lg p-4 mb-3 border border-gray-600';

        deviceElement.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <div class="flex-1">
                    <h3 class="font-bold text-white">${device.name}</h3>
                    <p class="text-sm text-gray-400">
                        ${device.watts}W • ${device.category}
                        ${device.year ? ` • ${device.year}` : ''}
                    </p>
                </div>
                <button onclick="removeDevice(${index})" class="text-red-400 hover:text-red-300 ml-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="flex items-center space-x-2">
                <label class="text-sm text-gray-400">Hours/day:</label>
                <input type="number"
                       value="${device.hours}"
                       min="0"
                       max="24"
                       step="0.5"
                       onchange="updateDeviceHours(${index}, this.value)"
                       class="bg-gray-600 text-white px-2 py-1 rounded w-20 text-sm">
                <span class="text-sm text-gray-400">
                    ${(device.watts * device.hours / 1000).toFixed(2)} kWh/day
                </span>
            </div>
        `;

        container.appendChild(deviceElement);
    });
}

// Update device hours
function updateDeviceHours(index, hours) {
    selectedDevices[index].hours = parseFloat(hours) || 0;
    updateCalculations();
    updateDeviceList();
}

// Remove device
function removeDevice(index) {
    selectedDevices.splice(index, 1);
    updateDeviceList();
    updateCalculations();
}

// Update calculations
function updateCalculations() {
    const rateInput = document.getElementById('electricity-rate');
    const rate = parseFloat(rateInput?.value) || 0.15;

    let totalDailyKwh = 0;
    selectedDevices.forEach(device => {
        totalDailyKwh += (device.watts * device.hours) / 1000;
    });

    const monthlyKwh = totalDailyKwh * 30;
    const yearlyKwh = totalDailyKwh * 365;
    const monthlyCost = monthlyKwh * rate;
    const yearlyCost = yearlyKwh * rate;

    // Update display
    const summaryElement = document.getElementById('summary-section');
    if (summaryElement) {
        summaryElement.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-white">Energy Summary</h2>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <p class="text-sm text-cyan-100">Daily Usage</p>
                    <p class="text-3xl font-bold text-white">${totalDailyKwh.toFixed(2)} kWh</p>
                </div>
                <div>
                    <p class="text-sm text-cyan-100">Monthly Cost</p>
                    <p class="text-3xl font-bold text-white">$${monthlyCost.toFixed(2)}</p>
                </div>
                <div>
                    <p class="text-sm text-cyan-100">Yearly Usage</p>
                    <p class="text-2xl font-bold text-white">${yearlyKwh.toFixed(0)} kWh</p>
                </div>
                <div>
                    <p class="text-sm text-cyan-100">Yearly Cost</p>
                    <p class="text-2xl font-bold text-white">$${yearlyCost.toFixed(2)}</p>
                </div>
            </div>
        `;
    }
}

// Export functions for global use
window.initializeDeviceSearch = initializeDeviceSearch;
window.addDeviceToList = addDeviceToList;
window.updateDeviceHours = updateDeviceHours;
window.removeDevice = removeDevice;
window.filterByCategory = filterByCategory;