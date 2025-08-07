// Function to find the maximum element in an array
function findMax(numbers: number[]): number {
    let maxNumber = numbers[0]; // Assume the first number is the maximum
    for (let num of numbers) {
        if (num > maxNumber) {
            maxNumber = num; // Update the maxNumber if current number is greater
        }
    }
    return maxNumber; // Return the maximum number
}

// Testing the function
const numbers = [5, 2, 9, 1, 5, 6];
console.log(`The array is: [${numbers}]`);
console.log(`The maximum number is: ${findMax(numbers)}`);
