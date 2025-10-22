# MYSQL Country & Nationality List Imports

Use this repository to import comprehensive lists of countries and nationalities into your database or application.

## Features

- **Multiple Formats**: MySQL, JSON, PHP arrays, Python tuples, Joomla custom fields
- **Comprehensive Data**: Basic country info, detailed geographic data, time zones, nationalities
- **Standardized Codes**: ISO 3166-2, ISO 3166-3, and numeric codes
- **Flag Assets**: SVG flags for all countries and territories
- **Regular Updates**: Maintained to reflect current international standards

## Quick Start

### Database Import
```bash
# Import basic country list
mysql -u username -p database < country-lists/mysql-country-list.sql

# Import detailed country information
mysql -u username -p database < country-lists/mysql-country-list-detailed-info.sql
```

### PHP Usage
```php
<?php
include 'country-lists/php-country-list-array.php';
$countries = $arr; // Ready to use associative array
?>
```

### JavaScript/Web Usage
```javascript
// Fetch country data
fetch('country-lists/json-country-list.json')
  .then(response => response.json())
  .then(countries => {
    // Use country data in your application
  });
```

## Available Data

### Country Lists
| Format | File | Description |
|--------|------|-------------|
| MySQL Basic | `mysql-country-list.sql` | Country codes and names |
| MySQL InnoDB | `mysql-country-list-InnoDB.sql` | Optimized for InnoDB tables |
| MySQL Detailed | `mysql-country-list-detailed-info.sql` | Geographic, currency, and language data |
| JSON | `json-country-list.json` | Structured country data |
| JSON Extended | `json-country-list-V2-name-alpha2-3-numeric.json` | Full ISO codes and names |
| PHP Array | `php-country-list-array.php` | PHP associative array |
| Python Tuple | `python-country-list-array.py` | Django-compatible choices |
| Joomla Field | `json-country-list-joomla-custom-field.json` | Joomla CMS integration |

### Additional Data
- **Nationalities**: Separate nationality lists for applications requiring distinction
- **Time Zones**: Country-specific time zone data with GMT offsets
- **Flags**: SVG flag assets for all countries and territories

## Data Standards

All data follows international standards:
- **ISO 3166-1**: Country codes and names
- **ISO 3166-2**: Subdivisions and regions
- **ISO 4217**: Currency codes
- **ISO 639**: Language codes

## Flag Assets

SVG flags are provided in `flags/svg/` directory:
- Standard country flags
- Regional variants (UK nations, Caribbean Netherlands)
- Optimized for web use

## Time Zone Integration

Import time zone data for location-aware applications:
```sql
SOURCE time-zones/time-zone-import.sql;
```

## API Integration

For programmatic access, consider:
- **TimezoneDB**: Comprehensive time zone API (https://timezonedb.com/api)
- **Geonames**: Geographic data services (https://www.geonames.org/)

## Contributing

We welcome contributions! Please:
1. Report data inaccuracies with reliable sources
2. Suggest format improvements
3. Propose new data fields
4. Test changes across all formats

### Development Setup
```bash
# Clone repository
git clone https://github.com/your-repo/mysql-country-list.git
cd mysql-country-list

# Check data consistency
# (Add validation scripts as needed)
```

## Maintenance Notes

- **Outdated Names**: Some legacy names are preserved with notes (e.g., "Netherlands Antilles (dissolved)")
- **Data Sources**: Regularly updated from ISO standards and official registries
- **Compatibility**: Tested across MySQL 5.7+, PHP 7.0+, Python 3.6+

## License

MIT License - see [MIT-License](MIT-License) file for details.

## Credits

**Maintained by:** [raramuridesign.com](https://www.raramuridesign.com/)

**Data Sources:**
- ISO 3166 International Standards
- United Nations Geoscheme
- Geonames Database
- Flagpack (SVG flags)

**Related Projects:**
- [South African Postal Codes](https://github.com/raramuridesign-cc/South-African-Postal-Codes)

---

*For detailed documentation, see [docs/](docs/) directory.*
