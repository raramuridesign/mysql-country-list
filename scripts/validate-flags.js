const fs = require('fs');
const path = require('path');

function validateFlags() {
  const countries = JSON.parse(fs.readFileSync('country-lists/json-country-list.json'));
  const flagDir = 'flags/svg/';
  const missingFlags = [];

  countries.forEach(country => {
    const flagPath = path.join(flagDir, `${country.code}.svg`);
    if (!fs.existsSync(flagPath)) {
      missingFlags.push(country.code);
    }
  });

  if (missingFlags.length > 0) {
    console.error('Missing flags for:', missingFlags.join(', '));
    process.exit(1);
  }

  console.log(`✅ All ${countries.length} country flags present!`);
}

validateFlags();