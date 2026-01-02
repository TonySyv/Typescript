// Define the QueueItem class to hold the data and its priority
class QueueItem {
    data: any;
    priority: number;

    constructor(data: any, priority: number) {
        this.data = data;
        this.priority = priority;
    }
}

// Define the PriorityQueue class
class PriorityQueue {
    items: QueueItem[] = [];

    // Enqueue a new item into the Priority Queue
    enqueue(data: any, priority: number): void {
        const newItem = new QueueItem(data, priority);
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (newItem.priority < this.items[i].priority) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem);
        }
    }

    // Dequeue the highest priority item from the Priority Queue
    dequeue(): any {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift()?.data;
    }

    // Peek at the highest priority item without dequeuing
    peek(): any {
        if (this.isEmpty()) return "Empty Queue";
        return this.items[0].data;
    }

    // Helper method to check if the Priority Queue is empty
    isEmpty(): boolean {
        return this.items.length == 0;
    }
}

// Test the PriorityQueue class
const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);
console.log("Peek at highest priority item:", pq.peek());
console.log("Dequeue highest priority item:", pq.dequeue());
console.log("Peek at highest priority item:", pq.peek());
