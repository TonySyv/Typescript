// Function to generate Fibonacci series of a given length
function generateFibonacci(length: number): number[] {
    if (length <= 0) return [];

    let series = [0, 1];
    for (let i = 2; i < length; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return length === 1 ? [0] : series;
}

// Testing the function
const lengthOfSeries = 7;
console.log(`Fibonacci series of length ${lengthOfSeries} is:`, generateFibonacci(lengthOfSeries));
