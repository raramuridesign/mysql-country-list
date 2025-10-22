# Contributing to MySQL Country List

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Ways to Contribute

### 🐛 Reporting Issues
- Use the provided issue templates for structured feedback
- Include country codes, current data, proposed corrections, and sources
- Check existing issues first to avoid duplicates

### 💡 Feature Requests
- Use the feature request template
- Describe the problem and proposed solution clearly
- Consider alternative approaches and their trade-offs

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch from `main`
- Make your changes with clear commit messages
- Test thoroughly across all affected formats
- Submit a pull request with a clear description

### 📊 Data Corrections
- Provide reliable sources (government sites, ISO standards, UN documents)
- Include specific country codes and affected formats
- Explain the impact and rationale for changes

## Development Setup

```bash
# Clone and setup
git clone https://github.com/your-repo/mysql-country-list.git
cd mysql-country-list

# Run validation scripts
node scripts/validate-flags.js

# Check data consistency (when available)
# npm test
```

## Data Standards

When contributing data changes:
- Follow ISO 3166 standards for country codes and names
- Use official country names in English
- Include local/native names where appropriate
- Maintain consistency across all file formats

## File Format Guidelines

### JSON Files
- Use consistent indentation (2 spaces)
- Include all required fields
- Validate JSON syntax before committing

### SQL Files
- Use UTF-8 encoding
- Include proper indexes
- Test imports on MySQL 5.7+ and 8.0+

### Programming Language Files
- Follow language-specific conventions
- Include proper encoding declarations
- Test basic functionality

## Commit Guidelines

- Use clear, descriptive commit messages
- Reference issue numbers when applicable: `Fix #123: Update Timor-Leste country code`
- Keep commits focused on single changes
- Use present tense: "Add feature" not "Added feature"

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing related changes
- `chore`: Maintenance tasks

## Testing

Before submitting a PR:
- Run flag validation: `node scripts/validate-flags.js`
- Check that all formats contain consistent data
- Verify JSON files are valid
- Test SQL imports if modified

## Pull Request Process

1. **Create a Fork**: Fork the repository to your GitHub account
2. **Create a Branch**: `git checkout -b feature/your-feature-name`
3. **Make Changes**: Implement your feature or fix
4. **Test**: Ensure all tests pass and validation scripts run
5. **Commit**: Use clear commit messages
6. **Push**: Push your branch to your fork
7. **Create PR**: Open a pull request with a clear title and description

### PR Description Template
```
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] All validation scripts pass
- [ ] Manual testing completed
- [ ] Cross-format consistency verified

## Additional Notes
Any additional context or considerations
```

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in CHANGELOG.md for significant contributions
- Acknowledged in release notes
- Featured in GitHub's contributor insights

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. By participating, you agree to:
- Be respectful and inclusive
- Focus on constructive feedback
- Help create a positive community
- Follow the project's standards and guidelines

## Getting Help

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for general questions
- **Documentation**: Check docs/ directory for detailed guides

Thank you for helping improve this project! 🚀

---

*This contributing guide is adapted from open source best practices and the Contributor Covenant.*