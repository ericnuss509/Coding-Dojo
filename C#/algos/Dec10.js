class Queue {
    constructor() {
      this.values = [];
    }
  
    /**
     * Adds a value and returns the new size.
     * 
     * @param {any} val
     * @returns {number} the new size
     */
  
    enqueue(val) {
      this.values.push(val);
      return this.values.length;
    }
  
    /**
     * @returns {any} the removed (front) value
     */
  
    dequeue() {
      return this.values.shift();
    }
  
    /**
     * @returns {boolean}
     */
  
    isEmpty() {
      return this.values.length === 0;
    }
  
    /**
     * @returns {number}
     */
  
    size() {
      return this.values.length;
    }
  
    /**
     * Determines whether the first half's sum equals the second half's sum
     * DO NOT manually index the queue items, 
     * only use the provided queue methods, 
     * use no additional arrays or objects for storage
     * Restore the queue to its original state.
     * 
     * @returns {boolean}
     */
  
    sumOfHalvesEqual() {
    let size = this.size()
      if (size % 2 !== 0){
        return false
      }
      
      var halflength = size / 2;
      var count = 0;
      var FirstSum = 0;
      var SecSum = 0;
      while (count < halflength){
        console.log("count: " + count)
        let temp = this.dequeue();
        console.log("temp: " + temp)
        FirstSum += temp;
        console.log("FirstSum: " + FirstSum)
        this.enqueue(temp);
        count ++;
        console.log("count after: " + count)
      }
      while (count < size){
        let temp = this.dequeue();
        SecSum += temp;
        this.enqueue(temp);
        count ++;
      }
      return FirstSum == SecSum;
  
  
      // your code here
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  queue.enqueue(3);
  queue.enqueue(2);
  queue.enqueue(1);
  console.log(queue.sumOfHalvesEqual()); // should log true
  
  
//   class Stack {
//     constructor() {
//       this.values = [];
//     }
  
//     /**
//      * Adds a new value to the top.
//      * 
//      * @param {any} val the value to add
//      * @returns {number} the new size of the stack
//      */
  
//     push(val) {
//       this.values.push(val);
//       return this.size();
//     }
  
//     /**
//      * Removes and returns the top value.
//      * 
//      * @returns {any} the removed top value
//      */
  
//     pop() {
//       return this.values.pop();
//     }
  
//     /**
//      * Returns whether the stack is empty.
//      * 
//      * @returns {boolean}
//      */
  
//     isEmpty() {
//       return this.size() === 0;
//     }
  
//     /**
//      * @returns {number} the number of items in the stack
//      */
  
//     size() {
//       return this.values.length;
//     }
  
//     /**
//      * Returns, but doesn't remove, the top value.
//      * 
//      * @returns {any} the top value
//      */
  
//     peek() {
//       return this.size() === 0
//         ? null
//         : this.values.slice(-1)[0];
//     }
//   }
  
//   class QueueWithStacks {
//     constructor() {
//       this.stack1 = new Stack();
//       this.stack2 = new Stack();
//     }
  
//     /**
//      * Adds a value and returns the new size of the queue
//      * Only use the two stacks and their methods
//      * How do you make a FIFO (First In First Out) structure from
//      * two LIFO (Last In First Out) structures?
//      * 
//      * @param {any} val the value to add
//      * @returns {number} the new size of the queue
//      */
  
//     enqueue(val) {
//       // your code here
//     }
  
//     /**
//      * Removes the value at the front of the queue
//      * Only use the two stacks and their methods
//      * 
//      * @returns {any} the front value or null if empty
//      */
  
//     dequeue() {
//       // your code here
//     }
//   }
  
//   const stacksQueue = new QueueWithStacks();
  
//   console.log(stacksQueue.enqueue('a')); // should log 1
//   console.log(stacksQueue.enqueue('b')); // should log 2
//   console.log(stacksQueue.enqueue('c')); // should log 3
  
//   console.log(stacksQueue.dequeue()); // should log 'c'
//   console.log(stacksQueue.dequeue()); // should log 'b'
//   console.log(stacksQueue.dequeue()); // should log 'a'
  
  
//   // EXTRA: NextQueue
//   // Design a Queue class that automatically sends every 3rd dequeued person object to a next queue that can be specified
//   // Imagine a security queue where every 3rd person is randomly sent to an additional security queue