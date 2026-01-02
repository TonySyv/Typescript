// Function to count the number of vowels in a string
function countVowels(s: string): number {
    // Convert the string to lowercase to make our search case-insensitive
    const lowerCaseStr = s.toLowerCase();

    // Define our vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Count and return the number of vowels in the string
    return [...lowerCaseStr].filter(char => vowels.includes(char)).length;
}

// Test the function
const testStr = "Hello, World!";
console.log(`Number of vowels in "${testStr}" is:`, countVowels(testStr));
