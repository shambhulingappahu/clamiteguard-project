const forestAreaByDistrict = {
  'Chikmagalur': 3215.6,
  'Shimoga': 4285.2
};

const districtNamingBridge = {
  Bagalkot: 'Bagalkote',
  Belgaum: 'Belagavi',
  Bellary: 'Ballari',
  Bangalore: 'Bengaluru Urban',
  'Bangalore Rural': 'Bengaluru Rural',
  'Bangalore Urban': 'Bengaluru Urban',
  Bijapur: 'Vijayapura',
  Chamrajnagar: 'Chamarajanagar',
  'Dakshin Kannada': 'Dakshina Kannada',
  'Dakshin Kannad': 'Dakshina Kannada',
  Gulbarga: 'Kalaburagi',
  Mysore: 'Mysuru',
  Shimoga: 'Shivamogga',
  Chikmagalur: 'Chikkamagaluru',
  Chickmagalur: 'Chikkamagaluru',
  Shimoga: 'Shimoga',
  Shivamogga: 'Shimoga',
  Chikmagalur: 'Chikmagalur',
  Chikkamagaluru: 'Chikmagalur',
  Chickmagalur: 'Chikmagalur',
  Tumkur: 'Tumakuru',
  Yadagiri: 'Yadgir',
  'Uttar Kannada': 'Uttara Kannada',
  'Uttar Kannand': 'Uttara Kannada'
};

function normalizeDistrictKey(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/district/g, '')
    .replace(/[.\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeDistrictName(rawName) {
  if (!rawName) return '';
  
  if (forestAreaByDistrict[rawName] !== undefined) return rawName;

  const direct = districtNamingBridge[rawName] || rawName;
  if (forestAreaByDistrict[direct] !== undefined) return direct;

  const cleaned = normalizeDistrictKey(direct);
  const found = Object.keys(forestAreaByDistrict).find((district) => {
    const d = normalizeDistrictKey(district);
    return d === cleaned || d.includes(cleaned) || cleaned.includes(d);
  });
  return found || direct;
}

console.log('Chikkamagaluru ->', normalizeDistrictName('Chikkamagaluru'), forestAreaByDistrict[normalizeDistrictName('Chikkamagaluru')]);
console.log('Shivamogga ->', normalizeDistrictName('Shivamogga'), forestAreaByDistrict[normalizeDistrictName('Shivamogga')]);
