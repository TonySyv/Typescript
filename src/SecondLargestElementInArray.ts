// Function to find the second largest element in an array
function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null; // Array should have at least two elements

    let firstLargest = -Infinity;  // Initialized to the smallest possible value
    let secondLargest = -Infinity; // Initialized to the smallest possible value

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }
    }

    if (secondLargest === -Infinity) return null; // Means no valid second largest element
    return secondLargest;
}

// Test the function
const testArray = [10, 5, 8, 20, 7, 15];
const result = findSecondLargest(testArray);
if (result !== null) {
    console.log(`The second largest element in the array is: ${result}`);
} else {
    console.log('The array does not have a valid second largest element.');
}
