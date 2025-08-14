// Function to determine if two strings are anagrams
function areAnagrams(str1: string, str2: string): boolean {
    // Standardize the strings
    const sanitizedStr1 = str1.replace(/\W/g, '').toLowerCase();
    const sanitizedStr2 = str2.replace(/\W/g, '').toLowerCase();

    // Sort and compare
    return sanitizedStr1.split('').sort().join('') === sanitizedStr2.split('').sort().join('');
}

// Test the areAnagrams function
const string1 = "Listen";
const string2 = "Silent";
console.log(`"${string1}" and "${string2}" are anagrams: ${areAnagrams(string1, string2)}`);
