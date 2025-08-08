function linearSearch(arr: number[], target: number): number {
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i;  // If found, return the index
        }
    }
    return -1;  // If not found, return -1
}

// Test the function
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const targetElement = 14;
const index = linearSearch(array, targetElement);
if (index !== -1) {
    console.log(`Element ${targetElement} found at index: ${index}`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
