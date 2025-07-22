function factorial(n: number): number {
    if (n < 0) throw new Error("Factorial not defined for negative numbers.");

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
