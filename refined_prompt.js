/**
 * Converts a given string to camelCase format.
 * Handles various edge cases:
 * - Leading/trailing whitespace
 * - Multiple consecutive separators (space, underscore, dash, or combination)
 * - Already camelCase or PascalCase strings
 * - Fully uppercase, lowercase, or strings with numbers
 * - Ignores special characters unless they are valid separators or alphanumeric
 * - Returns empty string for non-string inputs or throws descriptive error
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} - The camelCase formatted string.
 * @throws {TypeError} - If input is not a string.
 */
function toCamelCase(input) {
    // Error handling: Return empty string for null/undefined, throw for non-string
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim leading/trailing whitespace
    let str = input.trim();

    if (str.length === 0) return '';

    // Replace all non-alphanumeric separators (space, _, -) with a single space
    // Also, remove other special characters except alphanumerics and separators
    str = str
        .replace(/[^a-zA-Z0-9 _\-]+/g, '') // Remove special chars except separators
        .replace(/[\s_\-]+/g, ' '); // Normalize all separators to single space

    // If the string is already camelCase or PascalCase, split by uppercase letters
    // Only if there are no spaces (i.e., no separators left)
    if (!str.includes(' ')) {
        // Split PascalCase or camelCase into words
        str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        str = str.replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2');
    }

    // Split into words
    const words = str.split(' ').filter(Boolean);

    if (words.length === 0) return '';

    // Convert to camelCase
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            // Capitalize first letter
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Unit tests for toCamelCase
(function testToCamelCase() {
    const tests = [
        // Basic cases
        { input: 'hello world', expected: 'helloWorld' },
        { input: 'Hello World', expected: 'helloWorld' },
        { input: 'hello_world', expected: 'helloWorld' },
        { input: 'hello-world', expected: 'helloWorld' },
        { input: 'hello   world', expected: 'helloWorld' },
        { input: '  hello world  ', expected: 'helloWorld' },
        { input: 'HELLO_WORLD', expected: 'helloWorld' },
        { input: 'helloWorld', expected: 'helloWorld' },
        { input: 'HelloWorld', expected: 'helloWorld' },
        { input: 'helloWorldTest', expected: 'helloWorldTest' },
        { input: 'HelloWorldTest', expected: 'helloWorldTest' },
        { input: 'hello123world', expected: 'hello123world' },
        { input: 'hello_123_world', expected: 'hello123World' },
        { input: '123_hello_world', expected: '123HelloWorld' },
        { input: 'hello--world', expected: 'helloWorld' },
        { input: 'hello__world', expected: 'helloWorld' },
        { input: 'hello---___world', expected: 'helloWorld' },
        { input: 'hello!@#world', expected: 'helloWorld' },
        { input: 'hello world!', expected: 'helloWorld' },
        { input: 'hello$%^world', expected: 'helloWorld' },
        { input: 'hello world123', expected: 'helloWorld123' },
        { input: 'HELLO123WORLD', expected: 'hello123World' },
        { input: 'user_ID', expected: 'userId' },
        { input: 'user-id', expected: 'userId' },
        { input: 'user id', expected: 'userId' },
        { input: 'userID', expected: 'userId' },
        { input: 'UserID', expected: 'userId' },
        { input: 'userIDNumber', expected: 'userIdNumber' },
        { input: 'UserIDNumber', expected: 'userIdNumber' },
        // Edge cases
        { input: '', expected: '' },
        { input: '   ', expected: '' },
        { input: null, expected: '' },
        { input: undefined, expected: '' },
        { input: '___', expected: '' },
        { input: '---', expected: '' },
        { input: '!!!', expected: '' },
        { input: '123', expected: '123' },
        { input: 'A', expected: 'a' },
        { input: 'a', expected: 'a' },
        { input: 'A_B_C', expected: 'aBC' },
        { input: 'A-B-C', expected: 'aBC' },
        { input: 'A B C', expected: 'aBC' },
        { input: 'a_b_c', expected: 'aBC' },
        { input: 'a-b-c', expected: 'aBC' },
        { input: 'a b c', expected: 'aBC' },
        // Non-string input
        { input: 123, error: true },
        { input: {}, error: true },
        { input: [], error: true },
        { input: true, error: true },
    ];

    let passed = 0;
    let failed = 0;

    for (const { input, expected, error } of tests) {
        let result, threw = false;
        try {
            result = toCamelCase(input);
        } catch (e) {
            threw = true;
        }
        if (error) {
            if (threw) {
                passed++;
            } else {
                console.error(`FAILED: toCamelCase(${JSON.stringify(input)}) should throw an error`);
                failed++;
            }
        } else if (result === expected) {
            passed++;
        } else {
            console.error(`FAILED: toCamelCase(${JSON.stringify(input)}) = ${JSON.stringify(result)}, expected ${JSON.stringify(expected)}`);
            failed++;
        }
    }
    console.log(`toCamelCase: ${passed} passed, ${failed} failed`);
})();