class PriQNode {
    constructor(val, pri) {
      this.val = val;
      this.pri = pri; // the priority of the item
      this.next = null;
    }
  }
  
  class PriQueue {
    constructor() {
      this.head = this.tail = null;
    }
  
    /**
     * Inserts a value according to its priority; priority of 0 is the "highest"
     * 
     * @param {any} val the value to insert
     * @param {number} pri the priority of the value
     */
  
    enqueue(val, pri) {
      // your code here
    }
  
    /**
     * Removes and returns the front value.
     * 
     * @returns {any} the front value or null if empty
     */
  
    dequeue() {
      // your code here
    }
  }
  
  const priQ = new PriQueue();
  
  priQ.enqueue('this', 5);
  // 'this'
  
  priQ.enqueue('that', 2);
  // 'that' - 'this'
  
  console.log(priQ.head.val); // should log 'that'
  
  console.log(priQ.dequeue()); // should log 'that'
  
  console.log(priQ.head.val); // should log 'this'
  
  
  /* 
    BONUS (part of a queue class):
    Visualize a pallet of products, it is a 
    grid (rows and columns, like a chess board) where each grid space has
    products stacked on top of each other.
    Your task is to unload a shipment of pallets that arrived, process them in
    the order they were received (FIFO):
    Given a queue of pallets (this queue) write a processPallets method,
    a pallet is a 2d grid (2d array)
    where the nested arrays contain stacks of product objects containing a name and price key.
    Work through the queue of pallets to unload all the products on each pallet.
    Unloading simply means removing all the items from the queues and stacks
    via the appropriate class methods.
    return a bill of goods containing all the names of products received and the total value of the merchandise
    DOUBLE BONUS: unload the products into a priority queue based on a
    daysUntilExpiration key on the product
    return the priority queue along with the bill of goods report.
  */