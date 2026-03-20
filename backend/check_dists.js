const fs = require('fs');

async function check() {
    try {
        const res = await fetch('http://localhost:5000/api/dataset/seasons?limit=50000');
        const json = await res.json();
        const dists = new Set();
        (json.data || []).forEach(d => {
            if (d.Location) dists.add(d.Location.trim());
        });
        
        const geoJsonPath = 'c:/Users/shash/Desktop/clamiteguard/frontend/data/karnataka.geojson';
        const geoJsonStr = fs.readFileSync(geoJsonPath, 'utf8');
        const geoData = JSON.parse(geoJsonStr);
        const geoDists = new Set();
        geoData.features.forEach(f => {
            if (f.properties && f.properties.NAME_2) geoDists.add(f.properties.NAME_2.trim());
        });
        
        fs.writeFileSync('c:/Users/shash/Desktop/clamiteguard/backend/dists_output.json', JSON.stringify({
            api: Array.from(dists).sort(),
            geo: Array.from(geoDists).sort()
        }, null, 2));
    } catch(e) {
        console.error(e);
    }
}
check();
