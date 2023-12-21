class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the elements of the stack
    print() {
      console.log(this.items.join(' '));
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack elements:");
  stack.print(); // Output: 1 2 3
  
  console.log("Top element:", stack.peek()); // Output: 3
  
  console.log("Popped element:", stack.pop()); // Output: 3
  
  console.log("Stack size:", stack.size()); // Output: 2
  
  console.log("Is the stack empty?", stack.isEmpty()); // Output: false
  
  stack.clear();
  console.log("Is the stack empty after clearing?", stack.isEmpty()); // Output: true
  