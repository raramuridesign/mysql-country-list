# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Flag integration with country mapping JSON (`flags/country-mapping.json`)
- Flag validation script (`scripts/validate-flags.js`)
- Enhanced documentation across all README files
- GitHub issue templates for structured community feedback
- Community engagement files (CONTRIBUTORS.md, CONTRIBUTING.md)

### Changed
- Updated country names for accuracy:
  - "East Timor" → "Timor-Leste"
  - "Libyan Arab Jamahiriya" → "Libya"
  - "Netherlands Antilles" → "Netherlands Antilles (dissolved)"
  - "France, Metropolitan" → "France, Metropolitan (obsolete)"
  - "Reunion" → "Réunion"
- Standardized data formats across all file types
- Improved README.md with comprehensive usage examples
- Enhanced docs/index.md with detailed technical documentation

### Fixed
- Corrected country name inconsistencies across formats
- Fixed numeric codes (Timor-Leste: 670 → 626)
- Standardized "the" usage in country names
- Corrected spelling errors in JSON files ("Democratis" → "Democratic", "Cook Island" → "Cook Islands")

## [1.0.0] - 2025-10-22

### Added
- Initial release with country lists in multiple formats:
  - MySQL dumps (basic, detailed, InnoDB)
  - JSON arrays (standard and extended)
  - PHP associative arrays
  - Python tuple lists
  - Joomla custom field format
- SVG flag assets for all countries and territories
- Time zone data with GMT offsets
- Basic documentation and usage examples

### Changed
- Migrated from basic country list to comprehensive geographic data repository
- Expanded from simple code/name pairs to detailed country information

### Deprecated
- Netherlands Antilles (dissolved October 2010)
- France, Metropolitan (administrative term no longer used)

### Removed
- Outdated country name variants

### Fixed
- Initial data consistency across all formats
- Proper UTF-8 encoding for international characters