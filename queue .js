// Queue class implementation
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Return the first element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue as a string
    printQueue() {
        return this.items.join(", ");
    }
}
// Simulating the queue for a movie theater or restaurant
function simulateWaitingLine() {
    const waitingLine = new Queue();

    // Adding customers to the queue (enqueue)
    waitingLine.enqueue("Alice");
    waitingLine.enqueue("Bob");
    waitingLine.enqueue("Charlie");
    waitingLine.enqueue("Diana");

    console.log("Initial waiting line: " + waitingLine.printQueue());

    // Serving customers (dequeue)
    console.log(waitingLine.dequeue() + " has been served.");
    console.log("Current waiting line: " + waitingLine.printQueue());

    console.log(waitingLine.dequeue() + " has been served.");
    console.log("Current waiting line: " + waitingLine.printQueue());

    console.log(waitingLine.dequeue() + " has been served.");
    console.log("Current waiting line: " + waitingLine.printQueue());

    // Checking who is next in line
    console.log("Next in line: " + waitingLine.peek());

    console.log(waitingLine.dequeue() + " has been served.");
    console.log("Final waiting line: " + waitingLine.printQueue());
}

// Run the simulation
simulateWaitingLine();