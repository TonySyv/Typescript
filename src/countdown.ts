function countdown(seconds: number): void {
    let remaining = seconds;

    const interval = setInterval(() => {
        if (remaining <= 0) {
            clearInterval(interval);
            console.log("⏰ Time's up!");
        } else {
            console.log(`⏳ ${remaining} seconds remaining...`);
            remaining--;
        }
    }, 1000);
}

// Example usage
countdown(5);
