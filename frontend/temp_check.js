
// ─── District Data (same as dataset_explorer.js) ───
const districtData = {
    "Bagalkote": { soil: "black", crops: ["maize", "sugarcane", "cotton"], rainfall: "Low to Moderate", temp: "32°C", humidity: "55%", rainfallMm: [8, 12, 10, 6, 14, 9, 7] },
    "Ballari": { soil: "black", crops: ["maize", "rice", "cotton"], rainfall: "Moderate", temp: "33°C", humidity: "50%", rainfallMm: [10, 15, 20, 18, 22, 14, 11] },
    "Belagavi": { soil: "black", crops: ["sugarcane", "maize", "rice"], rainfall: "High", temp: "28°C", humidity: "70%", rainfallMm: [20, 28, 35, 30, 40, 32, 25] },
    "Bengaluru Rural": { soil: "silty-loam", crops: ["rice", "maize", "ginger"], rainfall: "Moderate", temp: "27°C", humidity: "65%", rainfallMm: [12, 18, 22, 16, 20, 15, 13] },
    "Bengaluru Urban": { soil: "silty-loam", crops: ["rice", "ragi", "ginger"], rainfall: "Moderate", temp: "28°C", humidity: "60%", rainfallMm: [10, 16, 20, 14, 18, 12, 10] },
    "Bidar": { soil: "black", crops: ["maize", "pulses", "sugarcane"], rainfall: "Moderate", temp: "31°C", humidity: "58%", rainfallMm: [14, 20, 18, 22, 16, 12, 10] },
    "Chamarajanagar": { soil: "red", crops: ["maize", "sugarcane", "pulses"], rainfall: "Moderate", temp: "29°C", humidity: "62%", rainfallMm: [12, 16, 20, 18, 14, 10, 8] },
    "Chikballapur": { soil: "red", crops: ["maize", "sugarcane", "ginger"], rainfall: "Low", temp: "30°C", humidity: "52%", rainfallMm: [6, 10, 8, 12, 7, 5, 4] },
    "Chikmagalur": { soil: "laterite", crops: ["coffee", "tea", "ginger"], rainfall: "Very High", temp: "24°C", humidity: "82%", rainfallMm: [35, 45, 55, 60, 50, 40, 30] },
    "Chitradurga": { soil: "black", crops: ["maize", "cotton", "rice"], rainfall: "Low", temp: "31°C", humidity: "48%", rainfallMm: [5, 8, 10, 7, 12, 6, 4] },
    "Dakshina Kannada": { soil: "laterite", crops: ["coconut", "cocoa", "ginger"], rainfall: "Very High", temp: "30°C", humidity: "85%", rainfallMm: [40, 55, 65, 70, 60, 50, 38] },
    "Davanagere": { soil: "clay-loam", crops: ["maize", "rice", "sugarcane"], rainfall: "Moderate", temp: "30°C", humidity: "60%", rainfallMm: [14, 18, 22, 20, 16, 12, 10] },
    "Dharwad": { soil: "black", crops: ["maize", "cotton", "wheat"], rainfall: "Moderate", temp: "29°C", humidity: "58%", rainfallMm: [12, 16, 20, 18, 14, 10, 8] },
    "Gadag": { soil: "black", crops: ["maize", "cotton", "wheat"], rainfall: "Low", temp: "32°C", humidity: "45%", rainfallMm: [6, 10, 12, 8, 14, 7, 5] },
    "Hassan": { soil: "loam", crops: ["coffee", "ginger", "maize"], rainfall: "High", temp: "26°C", humidity: "75%", rainfallMm: [22, 30, 35, 28, 32, 25, 20] },
    "Haveri": { soil: "black", crops: ["maize", "sugarcane", "cotton"], rainfall: "Moderate", temp: "30°C", humidity: "58%", rainfallMm: [14, 18, 22, 16, 20, 14, 12] },
    "Kalaburagi": { soil: "black", crops: ["maize", "pulses", "sugarcane"], rainfall: "Low", temp: "34°C", humidity: "42%", rainfallMm: [4, 8, 6, 10, 5, 3, 2] },
    "Kodagu": { soil: "laterite", crops: ["coffee", "ginger", "cocoa"], rainfall: "Very High", temp: "22°C", humidity: "88%", rainfallMm: [45, 55, 70, 80, 65, 50, 40] },
    "Kolar": { soil: "red", crops: ["maize", "ragi", "ginger"], rainfall: "Low", temp: "30°C", humidity: "50%", rainfallMm: [6, 10, 8, 12, 7, 5, 4] },
    "Koppal": { soil: "black", crops: ["maize", "rice", "cotton"], rainfall: "Low", temp: "33°C", humidity: "45%", rainfallMm: [5, 8, 10, 6, 12, 7, 4] },
    "Mandya": { soil: "clay-loam", crops: ["rice", "sugarcane", "maize"], rainfall: "Moderate", temp: "28°C", humidity: "65%", rainfallMm: [14, 20, 24, 18, 22, 16, 12] },
    "Mysuru": { soil: "clay-loam", crops: ["rice", "sugarcane", "maize"], rainfall: "Moderate", temp: "27°C", humidity: "68%", rainfallMm: [16, 22, 28, 20, 26, 18, 14] },
    "Raichur": { soil: "black", crops: ["rice", "cotton", "maize"], rainfall: "Low", temp: "34°C", humidity: "40%", rainfallMm: [4, 7, 10, 6, 8, 5, 3] },
    "Ramanagara": { soil: "red", crops: ["ragi", "maize", "sugarcane"], rainfall: "Moderate", temp: "28°C", humidity: "62%", rainfallMm: [12, 16, 20, 14, 18, 12, 10] },
    "Shimoga": { soil: "laterite", crops: ["rice", "ginger", "maize"], rainfall: "High", temp: "26°C", humidity: "78%", rainfallMm: [25, 32, 40, 35, 38, 28, 22] },
    "Tumakuru": { soil: "red", crops: ["maize", "ragi", "sugarcane"], rainfall: "Low", temp: "30°C", humidity: "50%", rainfallMm: [6, 10, 14, 8, 12, 7, 5] },
    "Udupi": { soil: "laterite", crops: ["coconut", "cocoa", "ginger"], rainfall: "Very High", temp: "30°C", humidity: "86%", rainfallMm: [42, 55, 68, 75, 62, 48, 36] },
    "Uttara Kannada": { soil: "laterite", crops: ["rice", "coconut", "ginger"], rainfall: "Very High", temp: "28°C", humidity: "80%", rainfallMm: [35, 48, 58, 65, 52, 40, 30] },
    "Vijayanagara": { soil: "black", crops: ["rice", "maize", "cotton"], rainfall: "Moderate", temp: "31°C", humidity: "55%", rainfallMm: [10, 14, 18, 16, 20, 12, 8] },
    "Vijayapura": { soil: "black", crops: ["maize", "sugarcane", "pulses"], rainfall: "Low", temp: "33°C", humidity: "42%", rainfallMm: [4, 8, 6, 10, 5, 3, 2] },
    "Yadgir": { soil: "black", crops: ["maize", "rice", "cotton"], rainfall: "Low", temp: "34°C", humidity: "40%", rainfallMm: [5, 9, 11, 8, 10, 6, 4] },
};
window.districtData = districtData;

// ─── Crop Detail Database ───
const cropInfo = {
    'rice': { icon: '🌾', gradient: 'linear-gradient(135deg,#81c784,#388e3c)', season: 'Kharif', water: 'High', maturity: '3–4 months', tip: 'Maintain 5cm standing water during tillering. Transplant seedlings at 21 days.' },
    'sugarcane': { icon: '🎋', gradient: 'linear-gradient(135deg,#a5d6a7,#2e7d32)', season: 'Year Round', water: 'High', maturity: '10–12 months', tip: 'Plant ratoon crop after harvest. Earthing up improves yield significantly.' },
    'maize': { icon: '🌽', gradient: 'linear-gradient(135deg,#fff176,#f9a825)', season: 'Kharif/Rabi', water: 'Moderate', maturity: '3–4 months', tip: 'Apply nitrogen in 3 splits. Weed control in first 30 days is critical.' },
    'cotton': { icon: '☁️', gradient: 'linear-gradient(135deg,#e0e0e0,#9e9e9e)', season: 'Kharif', water: 'Moderate', maturity: '5–6 months', tip: 'Spray neem oil to control bollworms. Avoid waterlogging at boll stage.' },
    'wheat': { icon: '🌿', gradient: 'linear-gradient(135deg,#dce775,#9e9d24)', season: 'Rabi', water: 'Moderate', maturity: '4–5 months', tip: 'Sow at optimal temperature 20–25°C. First irrigation at crown root stage.' },
    'pulses': { icon: '🫘', gradient: 'linear-gradient(135deg,#bcaaa4,#6d4c41)', season: 'Rabi/Kharif', water: 'Low', maturity: '2–3 months', tip: 'Inoculate seed with Rhizobium culture. Avoid excess nitrogen fertiliser.' },
    'coffee': { icon: '☕', gradient: 'linear-gradient(135deg,#8d6e63,#4e342e)', season: 'Year Round', water: 'High', maturity: '3–4 years', tip: 'Provide 50% shade using silver oak. Drip irrigation improves bean quality.' },
    'tea': { icon: '🍵', gradient: 'linear-gradient(135deg,#c8e6c9,#1b5e20)', season: 'Year Round', water: 'Very High', maturity: '3–5 years', tip: 'Maintain soil pH 4.5–5.5. Prune every 3–4 years to refresh bush canopy.' },
    'ginger': { icon: '🫚', gradient: 'linear-gradient(135deg,#ffe0b2,#e65100)', season: 'Kharif', water: 'Moderate', maturity: '8–9 months', tip: 'Mulch with dry leaves after planting. Lift rhizomes when leaves turn yellow.' },
    'ragi': { icon: '🌾', gradient: 'linear-gradient(135deg,#d7ccc8,#795548)', season: 'Kharif', water: 'Low', maturity: '3–4 months', tip: 'Drought tolerant — ideal for dry spells. Weed at 20 and 40 days after sowing.' },
    'coconut': { icon: '🥥', gradient: 'linear-gradient(135deg,#a5d6a7,#1b5e20)', season: 'Year Round', water: 'Moderate', maturity: '6–7 years', tip: 'Apply organic manure in pits. Basin irrigation in summer months is essential.' },
    'cocoa': { icon: '🍫', gradient: 'linear-gradient(135deg,#a1887f,#3e2723)', season: 'Year Round', water: 'High', maturity: '3–4 years', tip: 'Intercrop with coconut for natural shade. Regular pruning prevents fungal disease.' },
};

// ─── Smart Crop Prediction Engine Database ───
const cropDatabase = {
    'rice': { name: 'Rice', icon: '🌾', minTemp: 20, maxTemp: 35, water: 'High', sowing: 'Jun-Aug', yield: '2200-4000 kg', soil: ['alluvial', 'loam', 'clay'] },
    'maize': { name: 'Maize', icon: '🌽', minTemp: 18, maxTemp: 30, water: 'Moderate', sowing: 'Jun-Jul', yield: '1800-3000 kg', soil: ['loam', 'clay-loam', 'black'] },
    'sugarcane': { name: 'Sugarcane', icon: '🌫️', minTemp: 21, maxTemp: 32, water: 'High', sowing: 'Jan-Mar, Jun-Jul', yield: '25-45 tons', soil: ['clay-loam', 'loam'] },
    'coconut': { name: 'Coconut', icon: '🌴', minTemp: 27, maxTemp: 32, water: 'High', sowing: 'Jun-Aug', yield: '5000-10000 nuts', soil: ['sandy', 'loam', 'laterite'] },
    'coffee': { name: 'Coffee', icon: '☕', minTemp: 15, maxTemp: 28, water: 'Moderate', sowing: 'Jun-Jul', yield: '300-500 kg', soil: ['laterite', 'loam'] },
    'cotton': { name: 'Cotton', icon: '🧵', minTemp: 21, maxTemp: 30, water: 'Moderate', sowing: 'May-Jul', yield: '500-800 kg', soil: ['black', 'clay'] },
    'ragi': { name: 'Ragi', icon: '🌾', minTemp: 20, maxTemp: 33, water: 'Low', sowing: 'Jun-Aug', yield: '600-1200 kg', soil: ['red', 'loam', 'sandy'] },
    'pulses': { name: 'Pulses', icon: '🫘', minTemp: 20, maxTemp: 35, water: 'Low', sowing: 'Jun-Sep', yield: '300-700 kg', soil: ['red', 'black', 'loam'] },
    'banana': { name: 'Banana', icon: '🍌', minTemp: 20, maxTemp: 35, water: 'High', sowing: 'Jan-Mar, Jun-Aug', yield: '15-40 tons', soil: ['alluvial', 'loam'] },
    'turmeric': { name: 'Turmeric', icon: '🟡', minTemp: 20, maxTemp: 30, water: 'Moderate', sowing: 'Apr-Jun', yield: '2-4 tons', soil: ['loam', 'clay-loam'] },
    'sunflower': { name: 'Sunflower', icon: '🌻', minTemp: 18, maxTemp: 35, water: 'Low', sowing: 'Jun-Jul, Oct-Nov', yield: '400-900 kg', soil: ['black', 'loam'] },
    'wheat': { name: 'Wheat', icon: '🌾', minTemp: 15, maxTemp: 25, water: 'Moderate', sowing: 'Nov-Dec', yield: '1200-2500 kg', soil: ['alluvial', 'loam', 'black'] },
    'ginger': { name: 'Ginger', icon: '🫚', minTemp: 20, maxTemp: 30, water: 'High', sowing: 'Apr-Jun', yield: '6-10 tons', soil: ['loam', 'sandy-loam'] },
    'tea': { name: 'Tea', icon: '🍵', minTemp: 13, maxTemp: 28, water: 'Very High', sowing: 'Jun-Sep', yield: '1500-2500 kg', soil: ['laterite', 'loam'] },
    'cocoa': { name: 'Cocoa', icon: '🍫', minTemp: 18, maxTemp: 32, water: 'High', sowing: 'Jun-Aug', yield: '300-500 kg', soil: ['loam', 'laterite'] }
};

// Irrigation advice map — expanded with detailed data
const irrigationMap = {
    "Very High": {
        main: '🚫 <strong>Reduce irrigation significantly.</strong> Very high rainfall expected — natural water supply is more than sufficient. Focus on drainage management.',
        alertClass: 'alert-danger',
        method: 'No artificial irrigation needed. Set up proper drainage channels to prevent waterlogging.',
        methodIcon: '🚫',
        schedule: 'No irrigation required. Monitor drainage every 2–3 days.',
        bestTime: 'Not applicable — focus on drainage during early morning hours.',
        cropTips: [
            'Rice: Drain excess water if standing above 5cm for more than 48 hours.',
            'Coffee/Tea: Ensure slope drainage to prevent root rot.',
            'Ginger: Raised beds are critical — ensure 15cm elevation above ground.',
            'Coconut: Check for waterlogging at the base — create circular drainage channels.'
        ],
        conservation: [
            'Build bunds and check dams to harvest excess rainwater.',
            'Redirect runoff to farm ponds for dry season use.',
            'Install overflow outlets in paddy fields to prevent crop damage.',
            'Use contour farming to reduce soil erosion from heavy rain.'
        ],
        seasonNote: 'During peak monsoon, prioritize drainage over irrigation. Excess water damages roots and promotes fungal diseases.'
    },
    "High": {
        main: '⚠️ <strong>Minimal irrigation needed.</strong> High rainfall expected — monitor soil moisture and irrigate only during dry spells.',
        alertClass: 'alert-warning',
        method: 'Drip irrigation for supplemental watering during brief dry gaps. Avoid flood irrigation.',
        methodIcon: '💧',
        schedule: 'Irrigate only if no rain for 4–5 consecutive days. Check soil moisture at 10cm depth.',
        bestTime: 'Early morning (6–8 AM) on dry days to maximize absorption.',
        cropTips: [
            'Rice: Maintain 2–3cm water level; let rain provide the rest.',
            'Sugarcane: Furrow irrigation only during extended dry spells (>5 days).',
            'Maize: Skip irrigation if soil feels moist at finger-depth (5cm).',
            'Coffee: Drip irrigation at 2L/plant/day only during rain breaks.'
        ],
        conservation: [
            'Mulch around crop bases with straw to retain moisture between rains.',
            'Use rain gauges to track actual rainfall and avoid over-watering.',
            'Harvest rainwater in farm ponds for potential dry spells.',
            'Plant cover crops between rows to reduce evaporation.'
        ],
        seasonNote: 'High rainfall regions have brief dry windows. Keep drip systems ready but use sparingly. Focus on soil health and drainage.'
    },
    "Moderate": {
        main: '💧 <strong>Standard irrigation schedule.</strong> Moderate rainfall expected — supplement with irrigation during dry gaps between showers.',
        alertClass: 'alert-success',
        method: 'Sprinkler or drip irrigation recommended. Alternate between methods based on crop type.',
        methodIcon: '🚿',
        schedule: 'Irrigate every 3–4 days if no rain. Apply 20–25mm water per session.',
        bestTime: 'Early morning (5–7 AM) or late evening (5–7 PM) to reduce evaporation losses.',
        cropTips: [
            'Rice: Maintain 3–5cm standing water during vegetative phase.',
            'Sugarcane: Furrow irrigate every 7–10 days; increase during grand growth.',
            'Maize: Critical irrigation at knee-high stage and tasseling.',
            'Cotton: Light irrigation every 10 days; avoid waterlogging at flowering.'
        ],
        conservation: [
            'Use drip irrigation to save 30–40% water compared to flood irrigation.',
            'Apply mulch (5–8cm thick) to retain soil moisture for 2–3 extra days.',
            'Schedule irrigation based on ET (evapotranspiration) data, not fixed intervals.',
            'Group crops with similar water needs together for efficient irrigation.'
        ],
        seasonNote: 'Moderate rainfall balances natural and supplemental water needs. Regular monitoring and flexible scheduling give the best results.'
    },
    "Low": {
        main: '🔴 <strong>Increase irrigation frequency.</strong> Low rainfall expected — ensure consistent water supply, especially for water-intensive crops.',
        alertClass: 'alert-info',
        method: 'Drip irrigation is essential for water efficiency. Use micro-sprinklers for wider coverage.',
        methodIcon: '💦',
        schedule: 'Irrigate every 2–3 days. Apply 30–35mm per session. Increase during peak summer.',
        bestTime: 'Early morning (5–6 AM) before heat rises. Never irrigate mid-day.',
        cropTips: [
            'Rice: Consider alternate wetting and drying (AWD) to save 25% water.',
            'Maize: Critical irrigation at V6, VT, and R1 stages — never skip these.',
            'Cotton: Life-saving irrigation at square formation and boll development stages.',
            'Ragi/Millets: Drought-tolerant but still need irrigation at flowering stage.'
        ],
        conservation: [
            'Install drip irrigation — saves 40–60% water vs flood method.',
            'Build farm ponds (min. 10m × 10m × 3m) to store water for dry periods.',
            'Use plastic mulch for high-value crops to cut evaporation by 50%.',
            'Consider deficit irrigation strategy — apply less water at non-critical stages.'
        ],
        seasonNote: 'In low-rainfall areas, every drop counts. Invest in micro-irrigation systems and rainwater harvesting. Choose drought-resistant crop varieties.'
    },
    "Low to Moderate": {
        main: '⚠️ <strong>Monitor closely and irrigate regularly.</strong> Rainfall can be unpredictable — maintain steady irrigation as a safety measure.',
        alertClass: 'alert-warning',
        method: 'Sprinkler or drip irrigation. Keep both systems ready to adapt to changing conditions.',
        methodIcon: '🔄',
        schedule: 'Irrigate every 3 days by default. Skip if significant rain (>15mm) occurs.',
        bestTime: 'Morning (6–8 AM) preferred. Evening irrigation OK if morning not feasible.',
        cropTips: [
            'Rice: Maintain 2–3cm water; ramp up if dry spell exceeds 3 days.',
            'Sugarcane: Alternate furrow irrigation to save water while maintaining yield.',
            'Maize: Ensure adequate moisture during tasseling — most critical period.',
            'Pulses: Light irrigation every 10–12 days; excess water reduces nitrogen fixation.'
        ],
        conservation: [
            'Track weather forecasts daily and adjust irrigation plans accordingly.',
            'Use tensiometers or soil moisture sensors for data-driven irrigation.',
            'practice surge irrigation to improve water distribution uniformity.',
            'Rotate between drip and sprinkler based on crop growth stage.'
        ],
        seasonNote: 'Unpredictable rainfall in this zone demands flexibility. Keep irrigation systems primed and monitor soil moisture 2–3 times per week.'
    }
};

// Function to populate irrigation advice UI
function populateIrrigation(rainfallLevel) {
    const advice = irrigationMap[rainfallLevel];
    if (!advice) return;

    const mainEl = document.getElementById('irrigMainAdvice');
    if (mainEl) {
        mainEl.innerHTML = advice.main;
        mainEl.className = 'alert border-0 mb-3 ' + advice.alertClass;
        mainEl.style.borderRadius = '12px';
    }

    const methodIcon = document.getElementById('irrigMethodIcon');
    if (methodIcon) methodIcon.textContent = advice.methodIcon;

    const methodEl = document.getElementById('irrigMethod');
    if (methodEl) methodEl.textContent = advice.method;

    const scheduleEl = document.getElementById('irrigSchedule');
    if (scheduleEl) scheduleEl.textContent = advice.schedule;

    const bestTimeEl = document.getElementById('irrigBestTime');
    if (bestTimeEl) bestTimeEl.textContent = advice.bestTime;

    const cropTipsEl = document.getElementById('irrigCropTips');
    if (cropTipsEl) {
        cropTipsEl.innerHTML = advice.cropTips.map(t => `<li class="mb-1">${t}</li>`).join('');
    }

    const conserveEl = document.getElementById('irrigConservation');
    if (conserveEl) {
        conserveEl.innerHTML = advice.conservation.map(t => `<li class="mb-1">${t}</li>`).join('');
    }

    const seasonEl = document.getElementById('irrigSeasonText');
    if (seasonEl) seasonEl.textContent = advice.seasonNote;
}

function getBaseSeasonFromMonth(monthIndex) {
    if (monthIndex >= 5 && monthIndex <= 9) return 'Kharif';
    if (monthIndex >= 10 || monthIndex <= 1) return 'Rabi';
    return 'Summer (Zaid)';
}

function getDistrictSeasonLabel(rainfall) {
    const baseSeason = getBaseSeasonFromMonth(new Date().getMonth());
    if (baseSeason === 'Kharif') {
        if (rainfall === 'Very High' || rainfall === 'High') return 'Kharif (Peak)';
        if (rainfall === 'Moderate') return 'Kharif (Active)';
        return 'Kharif (Irrigated)';
    }
    if (baseSeason === 'Rabi') {
        if (rainfall === 'Low' || rainfall === 'Low to Moderate') return 'Rabi (Favorable)';
        return 'Rabi (Moist)';
    }
    if (rainfall === 'Low' || rainfall === 'Low to Moderate') return 'Summer (Irrigated)';
    return 'Summer (Transitional)';
}

// ─── Date/Time ───
const farmerCurrentDate = document.getElementById('farmerCurrentDate');
function renderFarmerDateTime() {
    if (!farmerCurrentDate) return;
    const now = new Date();
    const datePart = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timePart = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    farmerCurrentDate.textContent = `${datePart} | ${timePart}`;
}
renderFarmerDateTime();
setInterval(renderFarmerDateTime, 5000);

// ─── Real Weather API (WeatherAPI.com via Backend Proxy) ───

// Generate real date labels for charts (today + 6 days)
function getRealDateLabels(days = 7) {
    const labels = [];
    const now = new Date();
    for (let i = 0; i < days; i++) {
        const d = new Date(now);
        d.setDate(now.getDate() + i);
        labels.push(d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }));
    }
    return labels;
}

let farmerLineChart = null;
let farmerBarChart = null;

function getRainBarColors(values) {
    return values.map(v => {
        if (v >= 40) return '#198754'; // very high
        if (v >= 20) return '#2fa06a'; // high
        if (v >= 8) return '#7acfa2';  // moderate
        return '#b7e7c9';              // low
    });
}

// Live weather state
let liveWeatherBase = { temp: 0, humidity: 0, wind: 0, rainfallMm: 0, condition: '--' };
let liveWeatherActive = false;

// Combined API call: Uses internal backend proxy (/api/weather) which handles WeatherAPI.com securely
async function fetchRealWeather(districtName) {
    if (!districtName) return null;
    try {
        // Call our own backend which has the API key in .env
        const url = `http://localhost:5000/api/weather?district=${encodeURIComponent(districtName)}&days=7`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('API error: ' + response.status);
        const result = await response.json();

        if (result.status !== 'success' || !result.data) {
            throw new Error(result.message || 'Failed to fetch weather data');
        }

        const data = result.data;

        // Store raw numeric base values for live ticker
        // Mapping WeatherAPI structure: current.temp_c, current.humidity, etc.
        liveWeatherBase = {
            temp: data.current.temp_c,
            humidity: data.current.humidity,
            wind: data.current.wind_kph,
            rainfallMm: data.current.precip_mm || 0,
            condition: data.current.condition.text || 'Unknown'
        };
        liveWeatherActive = true;

        // Prepare forecast arrays for charts
        const dailyRainfall = data.forecast.forecastday.map(day => day.day.totalprecip_mm);
        const dailyTempMax = data.forecast.forecastday.map(day => day.day.maxtemp_c);
        const dailyTempMin = data.forecast.forecastday.map(day => day.day.mintemp_c);
        const dailyDates = data.forecast.forecastday.map(day => day.date);

        // Prepare hourly data (next 24 hours)
        const hourlyData = data.forecast.forecastday[0].hour;
        const hourlyTemps = hourlyData.map(h => h.temp_c);
        const hourlyTimes = hourlyData.map(h => h.time);

        return {
            temp: Math.round(data.current.temp_c) + '°C',
            humidity: data.current.humidity + '%',
            wind: data.current.wind_kph.toFixed(1) + ' km/h',
            rainfallMm: (data.current.precip_mm || 0).toFixed(1) + ' mm',
            condition: data.current.condition.text || 'Unknown',
            dailyRainfall: dailyRainfall,
            dailyTempMax: dailyTempMax,
            dailyTempMin: dailyTempMin,
            dailyDates: dailyDates,
            hourlyTemps: hourlyTemps,
            hourlyTimes: hourlyTimes,
            isLive: true
        };
    } catch (err) {
        console.warn('Weather API Proxy error:', err.message);
        return null;
    }
}

// ─── Live Weather Ticker (updates every second) ───
const liveBadge = '<span class="badge bg-success" style="font-size:0.55rem;vertical-align:middle;animation:pulse 1.5s infinite;">● LIVE</span>';

function updateLiveWeatherDisplay() {
    if (!liveWeatherActive) return;
    // Add natural micro-fluctuations
    const t = liveWeatherBase.temp + (Math.random() - 0.5) * 0.3;
    const h = Math.max(0, Math.min(100, liveWeatherBase.humidity + (Math.random() - 0.5) * 1.0));
    const w = Math.max(0, liveWeatherBase.wind + (Math.random() - 0.5) * 0.5);
    const r = Math.max(0, liveWeatherBase.rainfallMm + (Math.random() - 0.5) * 0.2);

    document.getElementById('statTemp').innerHTML = t.toFixed(1) + '°C ' + liveBadge;
    document.getElementById('statHumidity').innerHTML = h.toFixed(1) + '% ' + liveBadge;
    document.getElementById('statRainfallMm').innerHTML = r.toFixed(1) + ' mm ' + liveBadge;
    document.getElementById('statWind').innerHTML = w.toFixed(1) + ' km/h ' + liveBadge;
    document.getElementById('statCondition').innerHTML = liveWeatherBase.condition + ' ' + liveBadge;
}

// Update display every 5 seconds (reduces DOM thrashing)
setInterval(updateLiveWeatherDisplay, 5000);

// ─── District Transfer Logic ───
const urlParams = new URLSearchParams(window.location.search);
const district = urlParams.get('district');

let chartRainfallData = [12, 18, 26, 22, 30, 24, 16]; // defaults
let chartLabels = getRealDateLabels();

if (district && districtData[district]) {
    const d = districtData[district];

    // Title
    const titleEl = document.querySelector('h3.fw-bold');
    const subtitleEl = document.querySelector('p.text-muted');
    if (titleEl) titleEl.textContent = `AgriGuard — ${district}`;
    if (subtitleEl) subtitleEl.textContent = `Climate and crop advisory for ${district} district`;

    // Weather Stats (set static defaults first, then overwrite with live data)
    document.getElementById('statTemp').textContent = d.temp;
    document.getElementById('statHumidity').textContent = d.humidity;
    document.getElementById('statRainfall').textContent = d.rainfall;
    document.getElementById('statSoil').textContent = d.soil.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    document.getElementById('statSeason').textContent = getDistrictSeasonLabel(d.rainfall);

    // Fetch real weather, start live ticker, + update charts
    function refreshWeatherData() {
        fetchRealWeather(district).then(weather => {
            if (weather && weather.isLive) {
                // Immediately update once
                updateLiveWeatherDisplay();

                // Update Irrigation Advice based on LIVE rainfall data
                if (weather.dailyRainfall && weather.dailyRainfall.length > 0) {
                    const todayRainMm = weather.dailyRainfall[0]; // today's total forecast
                    const currentTemp = parseFloat(weather.temp);
                    const currentHum = parseFloat(weather.humidity);

                    let liveRainfallLevel;
                    // Prediction model based on temp, humidity, and rainfall mm
                    if (todayRainMm > 40 || (todayRainMm > 20 && currentHum > 85)) liveRainfallLevel = 'Very High';
                    else if (todayRainMm > 15 || (currentHum > 80 && currentTemp < 28)) liveRainfallLevel = 'High';
                    else if (todayRainMm > 5 || currentHum > 70) liveRainfallLevel = 'Moderate';
                    else if (todayRainMm > 1 || currentHum > 60) liveRainfallLevel = 'Low to Moderate';
                    else liveRainfallLevel = 'Low';

                    populateIrrigation(liveRainfallLevel);

                    // Update live prediction onto the UI
                    const rfEl = document.getElementById('statRainfall');
                    if (rfEl) {
                        rfEl.innerHTML = liveRainfallLevel + ' <span class="badge bg-success" style="font-size:0.55rem;vertical-align:middle;animation:pulse 1.5s infinite;">● LIVE</span>';
                        if (liveRainfallLevel.includes('Very High')) rfEl.className = 'text-danger';
                        else if (liveRainfallLevel.includes('High')) rfEl.className = 'text-warning';
                        else if (liveRainfallLevel.includes('Low') && !liveRainfallLevel.includes('Moderate')) rfEl.className = 'text-info';
                        else rfEl.className = 'text-primary';
                    }

                    // Add LIVE indicator to irrigation main advice
                    const mainEl = document.getElementById('irrigMainAdvice');
                    if (mainEl) {
                        mainEl.innerHTML += ` <span class="badge bg-success" style="font-size:0.55rem;vertical-align:middle;animation:pulse 1.5s infinite;">● LIVE</span>` +
                            `<br><small class="text-muted">Predicted from temp (${weather.temp}), humidity (${weather.humidity}), & rainfall (${todayRainMm.toFixed(1)} mm) → <strong>${liveRainfallLevel}</strong> level</small>`;
                    }
                }

                // Update Recommended Crops with live weather data
                if (weather.dailyRainfall && weather.dailyRainfall.length > 0) {
                    renderRecommendedCrops(parseFloat(weather.temp), parseFloat(weather.humidity), weather.dailyRainfall[0]);
                } else {
                    renderRecommendedCrops(parseFloat(weather.temp), parseFloat(weather.humidity), liveWeatherBase.rainfallMm);
                }

                // Update summary with live weather
                const summaryText = document.getElementById('districtSummaryText');
                if (summaryText) {
                    const currentRainfallPred = document.getElementById('statRainfall') ? document.getElementById('statRainfall').innerText.replace(' ● LIVE', '') : d.rainfall;
                    summaryText.innerHTML = `<strong>${district}</strong> district has <strong>${d.soil}</strong> soil and predicts <strong>${currentRainfallPred.trim()}</strong> rainfall level. ` +
                        `The region is best suited for growing <strong>${d.crops.join(', ')}</strong>. ` +
                        `Current live temperature is <strong>${weather.temp}</strong> with <strong>${weather.humidity}</strong> humidity. ` +
                        `Wind speed: <strong>${weather.wind}</strong>. Conditions: <strong>${weather.condition}</strong>.`;
                }

                // Update charts with real forecast data
                if (weather.dailyDates && weather.dailyDates.length > 0) {
                    const realLabels = weather.dailyDates.map(dateStr => {
                        const dt = new Date(dateStr);
                        return dt.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
                    });

                    // Line chart → Temperature
                    if (farmerLineChart && weather.dailyTempMax) {
                        farmerLineChart.data.labels = realLabels;
                        farmerLineChart.data.datasets[0].data = weather.dailyTempMax;
                        farmerLineChart.data.datasets[0].label = 'Max Temperature (°C)';
                        farmerLineChart.update();
                    }
                    // Bar chart → Rainfall
                    if (farmerBarChart && weather.dailyRainfall) {
                        const rainfallData = weather.dailyRainfall
                            .map(v => Number(v))
                            .filter(v => Number.isFinite(v));
                        const rainfallLabels = realLabels.slice(0, rainfallData.length);

                        farmerBarChart.data.labels = rainfallLabels;
                        farmerBarChart.data.datasets[0].data = rainfallData;
                        farmerBarChart.data.datasets[0].backgroundColor = getRainBarColors(rainfallData);
                        farmerBarChart.data.datasets[0].label = 'Forecast Rainfall (mm)';
                        farmerBarChart.update();
                    }

                    // Hourly chart — render from same API data (no extra fetch)
                    if (weather.hourlyTemps && weather.hourlyTimes) {
                        renderHourlyTempChart(weather.hourlyTemps, weather.hourlyTimes);
                    }
                }
            }
        });
    }
    refreshWeatherData();
    // Re-fetch from API every 60 seconds for fresh base values
    setInterval(refreshWeatherData, 60000);

    // Rainfall color
    const rfEl = document.getElementById('statRainfall');
    if (d.rainfall.includes('Very High')) rfEl.className = 'text-danger';
    else if (d.rainfall.includes('High')) rfEl.className = 'text-warning';
    else if (d.rainfall.includes('Low')) rfEl.className = 'text-info';
    else rfEl.className = 'text-primary';

    // Summary Card
    const summaryCard = document.getElementById('districtSummaryCard');
    const summaryText = document.getElementById('districtSummaryText');
    if (summaryCard && summaryText) {
        summaryCard.style.display = 'block';
        summaryText.innerHTML = `<strong>${district}</strong> district has <strong>${d.soil}</strong> soil and receives <strong>${d.rainfall}</strong> rainfall. ` +
            `The region is best suited for growing <strong>${d.crops.join(', ')}</strong>. ` +
            `Current temperature is approximately <strong>${d.temp}</strong> with <strong>${d.humidity}</strong> humidity.`;
    }

    // Crops — dynamically recommended based on live weather
    function renderRecommendedCrops(liveTemp, liveHumidity, liveRainfallMm, customSoilInfo) {
        const cropCardGrid = document.getElementById('cropCardGrid');
        if (!cropCardGrid) return;

        // Score all crops based on live weather conditions
        const allCrops = Object.keys(cropInfo);
        const scored = allCrops.map(c => {
            const info = cropInfo[c];
            let score = 0;
            let reasons = [];

            // Water need vs rainfall match
            const waterMap = { 'Very High': 40, 'High': 20, 'Moderate': 8, 'Low': 2 };
            const idealRain = waterMap[info.water] || 8;
            const rainDiff = Math.abs(liveRainfallMm - idealRain);
            if (rainDiff <= 5) { score += 35; reasons.push('✅ Rainfall matches water needs'); }
            else if (rainDiff <= 15) { score += 20; reasons.push('⚠️ Rainfall acceptable'); }
            else { score += 5; reasons.push('❌ Rainfall mismatch'); }

            // Temperature suitability (use cropDatabase if available)
            const dbEntry = typeof cropDatabase !== 'undefined' ? cropDatabase[c] : null;
            if (dbEntry) {
                if (liveTemp >= dbEntry.minTemp && liveTemp <= dbEntry.maxTemp) {
                    const mid = (dbEntry.minTemp + dbEntry.maxTemp) / 2;
                    const range = (dbEntry.maxTemp - dbEntry.minTemp) / 2;
                    const closeness = 1 - Math.abs(liveTemp - mid) / range;
                    score += 20 + closeness * 15;
                    reasons.push('✅ Temperature in ideal range');
                } else {
                    const dist = liveTemp < dbEntry.minTemp ? dbEntry.minTemp - liveTemp : liveTemp - dbEntry.maxTemp;
                    if (dist <= 3) { score += 12; reasons.push('⚠️ Temperature slightly outside range'); }
                    else { score += 2; reasons.push('❌ Temperature unsuitable'); }
                }
            } else {
                score += 15; // neutral if no temp data
            }

            // Humidity match
            const humMap = { 'Very High': 85, 'High': 70, 'Moderate': 55, 'Low': 35 };
            const idealHum = humMap[info.water] || 55;
            const humDiff = Math.abs(liveHumidity - idealHum);
            if (humDiff <= 10) { score += 30; reasons.push('✅ Humidity ideal'); }
            else if (humDiff <= 25) { score += 15; reasons.push('⚠️ Humidity acceptable'); }
            else { score += 3; reasons.push('❌ Humidity mismatch'); }

            return { key: c, info, score: Math.min(100, Math.round(score)), reasons };
        });

        // Sort by score and take top crops
        scored.sort((a, b) => b.score - a.score);
        const topCrops = scored.slice(0, 6);

        // Update subtitle
        const subtitle = document.getElementById('cropRecommendSubtitle');
        if (subtitle) {
            subtitle.innerHTML = `Predicted from live data: <strong>${liveTemp.toFixed(1)}°C</strong> temp, <strong>${liveHumidity.toFixed(0)}%</strong> humidity, <strong>${liveRainfallMm.toFixed(1)} mm</strong> rainfall — ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} <span class="badge bg-success" style="font-size:0.55rem;vertical-align:middle;animation:pulse 1.5s infinite;">● LIVE</span>`;
        }

        const soilLabel = customSoilInfo ? customSoilInfo : (typeof d !== 'undefined' ? d.soil.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Mixed');
        cropCardGrid.innerHTML = topCrops.map((crop, i) => {
            const info = crop.info;
            const name = crop.key.charAt(0).toUpperCase() + crop.key.slice(1);
            const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
            const barColor = crop.score >= 70 ? '#198754' : crop.score >= 45 ? '#ffc107' : '#6c757d';
            const badge = crop.score >= 70 ? '<span class="badge bg-success">Best Match</span>'
                : crop.score >= 45 ? '<span class="badge bg-warning text-dark">Good</span>'
                    : '<span class="badge bg-secondary">Fair</span>';
            return `
                    <div class="col-md-4">
                        <div class="card border-0 h-100" style="border-radius:16px; box-shadow:0 2px 12px rgba(25,135,84,0.12); overflow:hidden;">
                            <div style="position:relative; height:140px; overflow:hidden;">
                                <div style="width:100%; height:100%; background:${info.gradient}; display:flex; align-items:center; justify-content:center; font-size:3.5rem;">${info.icon}</div>
                                <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent,rgba(0,0,0,0.55)); padding:8px 12px;">
                                    <span style="color:#fff; font-weight:700; font-size:1rem; text-shadow:0 1px 3px rgba(0,0,0,0.5);">${info.icon} ${name} ${medal}</span>
                                </div>
                            </div>
                            <div class="card-body p-3" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <small class="text-muted">${soilLabel} Soil</small>
                                    ${badge}
                                </div>
                                <div class="mb-2">
                                    <div class="progress" style="height:6px;border-radius:3px;">
                                        <div class="progress-bar" style="width:${crop.score}%;background:${barColor};border-radius:3px;" role="progressbar"></div>
                                    </div>
                                    <small class="text-muted">${crop.score}% suitability</small>
                                </div>
                                <div class="row g-1 mb-2">
                                    <div class="col-6">
                                        <div class="rounded p-1 text-center" style="background:#fff;">
                                            <div style="font-size:0.68rem;color:#6c757d;">📅 SEASON</div>
                                            <div style="font-size:0.8rem;font-weight:600;color:#198754;">${info.season}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="rounded p-1 text-center" style="background:#fff;">
                                            <div style="font-size:0.68rem;color:#6c757d;">💧 WATER</div>
                                            <div style="font-size:0.8rem;font-weight:600;color:#0d6efd;">${info.water}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="rounded p-1 text-center" style="background:#fff;">
                                            <div style="font-size:0.68rem;color:#6c757d;">⏱ MATURITY</div>
                                            <div style="font-size:0.8rem;font-weight:600;color:#6f42c1;">${info.maturity}</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="rounded p-1 text-center" style="background:#fff;">
                                            <div style="font-size:0.68rem;color:#6c757d;">🌧 RAIN NEED</div>
                                            <div style="font-size:0.8rem;font-weight:600;color:#dc7633;">${info.water}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1 pt-1 border-top">
                                    ${crop.reasons.map(r => '<div class="small text-muted">' + r + '</div>').join('')}
                                </div>
                                <div style="background:#fff;border-radius:8px;padding:6px 8px;margin-top:6px;">
                                    <span style="font-size:0.72rem;color:#6c757d;">💡 TIP: </span>
                                    <span style="font-size:0.78rem;color:#333;">${info.tip}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }).join('');
    }

    // Show initial static crops until live data arrives
    renderRecommendedCrops(parseFloat(d.temp), parseFloat(d.humidity), d.rainfallMm ? d.rainfallMm[0] : 10);

    // Irrigation — populate detailed advice
    populateIrrigation(d.rainfall);

    // Chart data
    chartRainfallData = d.rainfallMm || chartRainfallData;

} else if (!district) {
    // No district selected — show defaults
    document.getElementById('statTemp').textContent = '30°C';
    document.getElementById('statHumidity').textContent = '65%';
    document.getElementById('statRainfall').textContent = 'Moderate';
    document.getElementById('statSoil').textContent = 'Mixed';
    document.getElementById('statSeason').textContent = getBaseSeasonFromMonth(new Date().getMonth());
    populateIrrigation('Moderate');
    renderRecommendedCrops(30, 65, 10, 'Mixed');
}

// ─── Charts (with real date labels) ───
const farmerLineCtx = document.getElementById('farmerTrendLineChart');
if (farmerLineCtx) {
    farmerLineChart = new Chart(farmerLineCtx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Max Temperature (°C)',
                data: [30, 31, 29, 32, 30, 28, 31],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.15)',
                fill: true,
                tension: 0.35,
                pointBackgroundColor: '#e74c3c',
                pointRadius: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: false } } }
    });
}

const farmerBarCtx = document.getElementById('farmerTrendBarChart');
if (farmerBarCtx) {
    farmerBarChart = new Chart(farmerBarCtx, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Rainfall (mm)',
                data: chartRainfallData,
                backgroundColor: getRainBarColors(chartRainfallData),
                borderColor: '#198754',
                borderWidth: 1
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
    });
}

// ─── 24-Hour Hourly Temperature Chart (uses data from combined API call) ───
function renderHourlyTempChart(hourlyTemps, hourlyTimes) {
    const distLabel = district || 'Bengaluru';
    const subtitle = document.getElementById('hourlyChartSubtitle');
    if (subtitle) subtitle.textContent = `Hourly temperature from now to next 24 hours — ${distLabel}`;

    if (!hourlyTemps || !hourlyTimes) return;

    const now = new Date();
    const currentHour = now.getHours();
    const todayStr = now.toISOString().split('T')[0];
    const startIdx = hourlyTimes.findIndex(t => t.startsWith(todayStr + 'T' + String(currentHour).padStart(2, '0')));
    const idx = startIdx >= 0 ? startIdx : 0;

    const temps = hourlyTemps.slice(idx, idx + 24);
    const labels = hourlyTimes.slice(idx, idx + 24).map(t => {
        const d = new Date(t);
        return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    });

    const ctx = document.getElementById('farmerHourlyTempChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temps,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#e74c3c',
                    pointRadius: 3,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true } },
                scales: {
                    x: { ticks: { maxRotation: 45, font: { size: 10 } } },
                    y: { beginAtZero: false, title: { display: true, text: '°C' } }
                }
            }
        });
    }
}

// ─── Smart Crop Prediction Engine Functions ───

function predictCrops(temp, humidity, rainfallMm) {
    const predictions = [];
    for (const [key, crop] of Object.entries(cropDatabase)) {
        let score = 0;
        let reasons = [];

        // Temperature match (0-40 points)
        if (temp >= crop.minTemp && temp <= crop.maxTemp) {
            const mid = (crop.minTemp + crop.maxTemp) / 2;
            const range = (crop.maxTemp - crop.minTemp) / 2;
            const closeness = 1 - Math.abs(temp - mid) / range;
            score += 25 + closeness * 15;
            reasons.push('✅ Temperature in ideal range');
        } else {
            const dist = temp < crop.minTemp ? crop.minTemp - temp : temp - crop.maxTemp;
            if (dist <= 3) {
                score += 15;
                reasons.push('⚠️ Temperature slightly outside range');
            } else {
                reasons.push('❌ Temperature too ' + (temp < crop.minTemp ? 'cold' : 'hot'));
            }
        }

        // Humidity match (0-30 points)
        const waterScore = { 'Very High': 85, 'High': 70, 'Moderate': 50, 'Low': 30 };
        const idealHumidity = waterScore[crop.water] || 50;
        const humDiff = Math.abs(humidity - idealHumidity);
        if (humDiff <= 15) {
            score += 30;
            reasons.push('✅ Humidity matches water needs');
        } else if (humDiff <= 30) {
            score += 15;
            reasons.push('⚠️ Humidity acceptable');
        } else {
            score += 5;
            reasons.push('❌ Humidity mismatch');
        }

        // Rainfall match (0-30 points)
        const rainfallLevel = rainfallMm > 10 ? 'High' : rainfallMm > 2 ? 'Moderate' : 'Low';
        if ((crop.water === 'High' || crop.water === 'Very High') && rainfallLevel === 'High') {
            score += 30; reasons.push('✅ Good rainfall for this crop');
        } else if (crop.water === 'Moderate' && rainfallLevel === 'Moderate') {
            score += 30; reasons.push('✅ Rainfall level is ideal');
        } else if (crop.water === 'Low' && rainfallLevel === 'Low') {
            score += 30; reasons.push('✅ Low rainfall suits this crop');
        } else if (crop.water === 'Moderate') {
            score += 15; reasons.push('⚠️ Rainfall acceptable');
        } else {
            score += 8; reasons.push('⚠️ Irrigation may be needed');
        }

        predictions.push({ key, ...crop, score: Math.min(100, score), reasons });
    }
    return predictions.sort((a, b) => b.score - a.score);
}

function renderCropPredictions(temp, humidity, rainfallMm) {
    const predictions = predictCrops(temp, humidity, rainfallMm);
    const grid = document.getElementById('cropPredictionGrid');
    const subtitle = document.getElementById('predictionSubtitle');
    if (!grid) return;

    if (subtitle) {
        subtitle.textContent = `Live: ${temp.toFixed(1)}°C temp, ${humidity.toFixed(0)}% humidity, ${rainfallMm.toFixed(1)}mm rainfall`;
    }

    const top = predictions.slice(0, 6);
    grid.innerHTML = top.map((crop, i) => {
        const badge = crop.score >= 75 ? '<span class="badge bg-success">Excellent</span>'
            : crop.score >= 50 ? '<span class="badge bg-warning text-dark">Good</span>'
                : '<span class="badge bg-secondary">Fair</span>';
        const barColor = crop.score >= 75 ? '#198754' : crop.score >= 50 ? '#ffc107' : '#6c757d';
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';

        return `
                <div class="col-md-4 col-sm-6">
                    <div class="card border-0 h-100" style="border-radius:14px; box-shadow:0 2px 12px rgba(0,0,0,0.08);">
                        <div class="card-body p-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <h6 class="fw-bold mb-0">${crop.icon} ${crop.name} ${medal}</h6>
                                ${badge}
                            </div>
                            <div class="mb-2">
                                <div class="progress" style="height:8px;border-radius:4px;">
                                    <div class="progress-bar" style="width:${crop.score}%;background:${barColor};border-radius:4px;" role="progressbar"></div>
                                </div>
                                <small class="text-muted">${crop.score}% match</small>
                            </div>
                            <div class="small">
                                <div class="mb-1">🌡️ Ideal: <strong>${crop.minTemp}°C - ${crop.maxTemp}°C</strong></div>
                                <div class="mb-1">💧 Water: <strong>${crop.water}</strong></div>
                                <div class="mb-1">📅 Sowing: <strong>${crop.sowing}</strong></div>
                                <div>📊 Yield: <strong>${crop.yield}</strong></div>
                            </div>
                            <div class="mt-2 pt-2 border-top">
                                ${crop.reasons.map(r => '<div class="small text-muted">' + r + '</div>').join('')}
                            </div>
                        </div>
                    </div>
                </div>`;
    }).join('');
}

// Auto-update predictions when live weather arrives with fallback
let predictionAttempt = 0;
const predictionInterval = setInterval(() => {
    predictionAttempt++;
    if (liveWeatherActive && liveWeatherBase.temp !== undefined && liveWeatherBase.temp !== null) {
        renderCropPredictions(liveWeatherBase.temp, liveWeatherBase.humidity, liveWeatherBase.rainfallMm);
        clearInterval(predictionInterval);
    } else if (!district) {
        // Fallback for no district
        renderCropPredictions(30, 65, 10);
        clearInterval(predictionInterval);
    } else if (predictionAttempt > 5) {
        // Ultimate fallback
        renderCropPredictions(30, 65, 10);
        clearInterval(predictionInterval);
    }
}, 400);
