# SVG Flags

These flags have been added from Flagpack.

## Usage

### Direct Access
```html
<img src="flags/svg/US.svg" alt="United States Flag" width="32" height="32">
```

### Programmatic Access
```javascript
// Load country to flag mapping
fetch('flags/country-mapping.json')
  .then(response => response.json())
  .then(mapping => {
    const flagFile = mapping['US']; // "US.svg"
    console.log(`Flag: flags/svg/${flagFile}`);
  });
```

## Validation

Run flag validation:
```bash
node scripts/validate-flags.js
```

## Source

Flags sourced from [Flagpack](https://flagpack.xyz/) under MIT license.
