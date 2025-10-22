# MySQL Country List Repository

This repository provides comprehensive country data in multiple formats for easy integration into applications and databases.

## Overview

The repository contains standardized country information including:
- Country names (English and local variants)
- ISO 3166-2 alpha-2 codes
- ISO 3166-3 alpha-3 codes
- ISO 3166 numeric codes
- Geographic coordinates and boundaries
- Currency information
- Time zone data
- Flag assets (SVG format)

## Available Formats

### Database Imports
- **MySQL Basic**: Simple country code and name pairs
- **MySQL Detailed**: Comprehensive country information including coordinates, currencies, and languages
- **MySQL InnoDB**: Optimized for transactional databases

### Programming Language Arrays
- **PHP**: Associative arrays for easy PHP integration
- **Python**: Tuple lists compatible with Django choices
- **JSON**: Structured data for web applications

### Specialized Formats
- **Joomla Custom Field**: Pre-formatted for Joomla CMS integration
- **Time Zone Data**: Country-specific time zone information
- **Nationality Lists**: Separate nationality data for applications requiring distinction

## Data Sources

All data is sourced from:
- ISO 3166 international standards
- United Nations geoscheme
- Official country registries
- Flagpack (for SVG flags)

## Usage Examples

### PHP Integration
```php
<?php
include 'country-lists/php-country-list-array.php';
echo $arr['US']; // Outputs: United States
?>
```

### Python/Django
```python
from country_lists.python_country_list_array import TYPES_SELECT_COUNTRY
# Use TYPES_SELECT_COUNTRY in Django model choices
```

### MySQL Import
```sql
-- Import basic country list
SOURCE country-lists/mysql-country-list.sql;

-- Import detailed information
SOURCE country-lists/mysql-country-list-detailed-info.sql;
```

### JSON Usage
```javascript
fetch('country-lists/json-country-list.json')
  .then(response => response.json())
  .then(countries => {
    // Process country data
  });
```

## Data Structure

### Basic Country Entry
```json
{
  "en": "United States",
  "local": "United States of America (the)",
  "code": "US"
}
```

### Detailed Country Entry
```json
{
  "id": 233,
  "countryCode": "US",
  "countryName": "United States",
  "currencyCode": "USD",
  "fipsCode": "US",
  "isoNumeric": "840",
  "north": "49.388611",
  "south": "24.544245",
  "east": "-66.954811",
  "west": "-124.733253",
  "capital": "Washington",
  "continentName": "North America",
  "continent": "NA",
  "languages": "en-US,es-US,haw,fr",
  "isoAlpha3": "USA",
  "geonameId": 6252001,
  "telephonePrefix": "+1"
}
```

## Flag Assets

SVG flags are provided in the `flags/svg/` directory, organized by ISO 3166-2 alpha-2 codes. Flags are sourced from Flagpack and include:

- Standard country flags
- Regional variants (e.g., GB-ENG, GB-SCT, GB-WLS, GB-NIR for UK regions)
- Special territories (e.g., BQ-SA, BQ-BO, BQ-SE for Caribbean Netherlands)

## Time Zone Integration

The `time-zones/` directory contains MySQL import files with country-specific time zone data including GMT offsets and Olson time zone identifiers.

## Maintenance

This repository is actively maintained with regular updates to:
- Reflect changes in international standards
- Add newly recognized countries
- Update country names and codes
- Fix data inconsistencies

## Contributing

Issues and pull requests are welcome. Please:
- Report data inaccuracies with sources
- Suggest format improvements
- Propose new data fields

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- **Maintainer**: raramuridesign
- **Flag Assets**: Flagpack (https://flagpack.xyz/)
- **Data Sources**: ISO 3166, United Nations, Geonames
- **Time Zone Data**: TimezoneDB (https://timezonedb.com/)
