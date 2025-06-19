/**
 * Converts a given string into kebab-case.
 * Handles camelCase, PascalCase, spaces, underscores, dashes, all-uppercase, and removes special characters.
 * Throws an error if input is not a string.
 *
 * @param {string} input - The string to convert.
 * @returns {string} - The kebab-case version of the input.
 */
function toKebabCase(input) {
    // Input validation
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim leading/trailing whitespace
    let str = input.trim();

    // Replace underscores and dashes with spaces for normalization
    str = str.replace(/[_\-]+/g, ' ');

    // Insert spaces before camelCase or PascalCase transitions (e.g., "fooBar" -> "foo Bar")
    str = str.replace(/([a-z\d])([A-Z])/g, '$1 $2');
    str = str.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2');

    // Convert all-uppercase words to lowercase (e.g., "NASA" -> "nasa")
    // This is handled by the final .toLowerCase()

    // Remove all non-word characters except spaces (ignore special characters)
    str = str.replace(/[^a-zA-Z0-9\s]/g, '');

    // Split by whitespace, filter out empty strings, and join with hyphens
    const words = str.split(/\s+/).filter(Boolean);

    // Join words with hyphens and convert to lowercase
    return words.join('-').toLowerCase();
}

// --- Sample Test Cases ---

console.log(toKebabCase('camelCaseString'));           // "camel-case-string"
console.log(toKebabCase('PascalCaseString'));          // "pascal-case-string"
console.log(toKebabCase('  mixed_separators-Here '));  // "mixed-separators-here"
console.log(toKebabCase('ALLCAPS'));                   // "allcaps"
console.log(toKebabCase('with special!@# chars'));     // "with-special-chars"
console.log(toKebabCase('snake_case_and-dash-case'));  // "snake-case-and-dash-case"
console.log(toKebabCase('already-kebab-case'));        // "already-kebab-case"
console.log(toKebabCase('  multiple   spaces  here '));// "multiple-spaces-here"

// Uncomment to see error handling
// console.log(toKebabCase(123)); // Throws TypeError: Input must be a string.