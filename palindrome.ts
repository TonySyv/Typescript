function isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Example usage
const input = "A man, a plan, a canal, Panama";
console.log(`Is "${input}" a palindrome?`, isPalindrome(input));
