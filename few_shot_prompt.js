// few_shot_prompt.js

/**
 * This file contains a function to generate a few-shot prompt for language models.
 * You can customize the examples and the prompt as needed.
 */

function generateFewShotPrompt(examples, instruction, input) {
    let prompt = '';
    examples.forEach((ex, idx) => {
        prompt += `Example ${idx + 1}:\nInput: ${ex.input}\nOutput: ${ex.output}\n\n`;
    });
    prompt += `Instruction: ${instruction}\nInput: ${input}\nOutput:`;
    return prompt;
}

// Example usage:
const examples = [
    { input: "Translate 'hello' to French.", output: "Bonjour." },
    { input: "Translate 'goodbye' to French.", output: "Au revoir." }
];

const instruction = "Translate the following English phrase to French.";
const input = "Thank you";

console.log(generateFewShotPrompt(examples, instruction, input));

module.exports = { generateFewShotPrompt };


function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber

module.exports.toCamelCase = toCamelCase;