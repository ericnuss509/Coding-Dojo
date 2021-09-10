class DLLNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DLL {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    /**
     * Determines whether the list is empty.
     * 
     * @returns {boolean}
     */
  
    isEmpty() {
      // your code here
    }
  
    /**
     * Gathers the values into a new array.
     * 
     * @returns {any[]} the array of values
     */
  
    toArray() {
      // your code here
    }
  
    /**
     * Adds values from an array to the list.
     * 
     * @param {any[]} arr an array of values
     * @returns {DLL} the list
     */
  
    seedFromArray(arr) {
      // your code here
    }
  
    /**
     * Inserts a value at the front of the list.
     * 
     * @returns {DLL} the list
     */
  
    insertAtFront(val) {
      // your code here
    }
  
    /**
     * Inserts a value at the and of the list.
     * 
     * @returns {DLL} the list
     */
  
    insertAtBack(val) {
      // your code here
    }
  
    /**
     * Removes and returns the middle value from the list.
     * 
     * @returns {any|null} the removed value or null if there is no middle value
     */
  
    removeMiddleNode() {
      // your code here
    }
  }
  
  const dll = new DLL();
  
  dll.seedFromArray([1, 2, 3, 4]);
  // 1 <-> 2 <-> 3 <-> 4
  
  console.log(dll.isEmpty()); // should log false
  
  dll.insertAtFront(10);
  // 10 <-> 1 <-> 2 <-> 3 <-> 4
  
  console.log(dll.removeMiddleNode()); // should log 2
  // 10 <-> 1 <-> 3 <-> 4
  console.log(dll.head.next.next.val); // should log 3