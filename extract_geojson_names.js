const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./frontend/data/karnataka.geojson'));
const names = data.features.map(f => f.properties.NAME_2);
fs.writeFileSync('names.txt', names.join('\n'));
