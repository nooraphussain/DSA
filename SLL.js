class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    
    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    //2. add at the begining
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    //3. Insert at an index
    insertAt(index, value) {
        if (index < 0 || index > this.size) return console.log("Invalid index");
        if (index === 0) return this.prepend(value);
        if (index === this.size) return this.append(value);

        const newNode = new Node(value);
        let current = this.head;
        let prev = null;
        let i = 0;

        while (i < index) {
            prev = current;
            current = current.next;
            i++;
        }

        prev.next = newNode;
        newNode.next = current;
        this.size++;
    }

    // 4. Remove first occurrence of value
    remove(value){
        if(!this.head) return ;
        if(this.head.value === value){
            this.head =this.head.next;
            this.size--;
        }
        
        let current = this.head.next;
        let prev = null;
        
        while(current && current.value !== value){
            prev = current;
            current = current.next;
        }
        
        if(current){
            prev.next = current.next;
            this.size--;
            this.print();
        }else{
            return console.log(`${value} doesn't exist in list`)
        }
        
    }
 

    //Remove first occurrence of odd
    removeFirstOdd(){
        if(!this.head) return;
        if(this.head.value % 2 !== 0){
            this.head = this.head.next;
            this.size--;
            this.print();
        }
        
        let current = this.head.next;
        let prev = this.head;
        
        while(current){
            if(current.value%2 !==0){
                prev.next = current.next;
                this.size--;
                return this.print()
            }
            prev = current;
            current = current.next;
        }

    }

    //delete a node from specific position in a linkedlist
    deleteAt(index){
        if(!this.head) return ;

        
        let current = this.head;
        let prev = null
        let i =0;
        while(i<index){
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = current.next;
        this.size--;
        return this.print()
    }

    //5. Delete from front
    deleteFront(){
        if(!this.head) return;
        this.head = this.head.next;
        this.size--;
    }

    //6. Delete from back;
    deleteBack(){
        if(!this.head) return;
        if(!this.head.next) {
            this.head = null;
            this.size--;
            return;
        }

        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
        this.size--;
    }

    //7. reverse
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    //8. Middle element
    middleElement(){
        if(!this.head) return null;
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return console.log(`Middle element is: ${slow.value}`);
    }

    //Delete the middle element
    deleteMiddleElement(){
        if(!this.head) return null;
        if(!this.head.next){
            this.head = null;
            this.size--;
            return this.print()
        }
        
        let prev = null
        let slow = this.head;
        let fast = this.head;
        
        while(fast && fast.next){
            prev = slow
            slow = slow.next;
            fast = fast.next.next;
        }
        
        prev.next = slow.next;
        this.size--;
        return this.print()
    }

    //9. index of value
    indexOf(value){
        let current = this.head;
        let index = 0
        while(current){
            if(current.value === value) return console.log(`Index of value ${value} is: ${index}`);
            current = current.next;
            index++
        }
        return console.log('Value not found');
    }

    //Detect linked list has cyle
    hasCycle(){
        if(!this.head) return null
        let slow = this.head;
        let fast = this.head;
        
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow === fast) return console.log(true);
        }
        return console.log(false);
    }
    
    //Palindrome checking 
    isPalindrome(){
        if(!this.head || !this.head.next) return console.log(true);
          
          // Step 1: Find middle
          let slow = this.head;
          let fast = this.head;
          
          while(fast&& fast.next){
              slow = slow.next;
              fast = fast.next.next;
          }
          // middle - slow
          
          // Step 2: Reverse second half
          let prev = null;
          let current = slow;
          let next = null;
          
          while(current){
              next = current.next;
              current.next = prev;
              prev = current;
              current = next
          }
          
          // Step 3: Compare halves
          let left = this.head;
          let right = prev;
          
          while(right){
              if(left.value !== right.value){
                  return console.log('isPalindrome:', false);
              }
              left = left.next;
              right = right.next;
          }
          return console.log('isPalindrome:',true);
  
          
      }

    //remove duplicates of sorted linkedlist
    removeDuplicates(){
        if(!this.head) return null;
        let current = this.head;
        
        while(current.next){
            if(current.value === current.next.value){
                current.next = current.next.next
                this.size--;
            }
            current = current.next
        }
        return this.print()
    }

    //Last 3 elements of the list
    lastThree() {
        if(!this.head) return;
        
        let current = this.head;
        let res = [];
        
        if(this.size<=3){
            while(current){
                res.push(current.value);
                current = current.next;
            }
            return console.log(res)
        }
        
        let i=0;
        let thirdLast = this.size - 3;
        
        while(i< thirdLast){
            current = current.next;
            i++
        }
        while(current){
            res.push(current.value);
            current = current.next;
        }
        return console.log(res)
    }

    // swap first and last nodes
    swap(){
        if(!this.head || !this.head.next) return null;

        let first = this.head;
        let prev = null;
        let current = this.head;

        while(current.next){
            prev = current;
            current = current.next;
        }

        let last = current;

        prev.next = first;
        last.next = first.next;
        first.next = null;

        this.head = last;
        return this.print()
    }


    //10. print
    print(){ 
        
        let current = this.head;
        let res = '';
        while(current){
            res += current.value + ' -> ';
            current = current.next;
        }
        console.log(res + 'null')
    }

    //11. size
    getSize(){
        console.log(`Size of the SLL: ${this.size}`);
    }

    //12. check empty
    isEmpty(){
        console.log(`SLL is empty: ${this.size === 0}`);
    }

}



const list = new SinglyLinkedList();
list.getSize();
list.isEmpty();
list.append(10);
list.print();
list.getSize();
list.isEmpty();
list.prepend(5);
list.print();
list.indexOf(10);
list.indexOf(1);
list.append('a');
list.prepend('b');
list.print();
list.deleteFront();
list.print();
list.deleteBack();
list.print();
list.append(15);
list.append(20);
list.append(25);
list.append(30);
list.print();
list.getSize();
list.reverse();
list.print();
list.reverse();
list.middleElement()
list.print();
list.swap()



// A singly linked list is a linear data structure where each element (node) contains two parts:

// 1.Data
// 2.Pointer (link) to the next node in the sequence


// Applications of Singly Linked List

// 1. Dynamic Memory Allocation
// Linked lists allow memory to be allocated and deallocated at runtime.
// Useful when the size of data is not known in advance.

// 2. Implementation of Stacks and Queues
// Stack (LIFO) and Queue (FIFO) can be efficiently implemented using linked lists.
// No need for fixed-size arrays.

// 3. Handling Large Data
// Used when large data needs to be stored and continuous memory is not available.
// Nodes can be stored anywhere in memory.

// 4. Polynomial Representation
// Each term of a polynomial is stored as a node.
// Efficient for operations like addition and multiplication of polynomials.

// 5. Sparse Matrices
// Only non-zero elements are stored using linked lists.
// Saves memory compared to 2D arrays.

// 6. Graph Representation
// Used in adjacency list representation of graphs.
// Each vertex maintains a linked list of its adjacent vertices.

// 7. Undo/Redo Operations (Basic Forms)
// Simple versions can use singly linked lists to track previous states.

// 8. File Systems & Memory Management
// Used to manage free blocks of memory (free lists).
// Helps in efficient allocation and deallocation.

// 9. Hash Tables (Chaining)
// Used to resolve collisions in hash tables.
// Each bucket contains a linked list of elements.

// 10. Navigation Systems
// Can represent sequences like:
// Music playlists
// Browser navigation (simplified)


// 🔹 Advantages
// Dynamic size
// Efficient insertion and deletion
// No need for contiguous memory

// 🔹 Disadvantages
// No random access (must traverse sequentially)
// Extra memory for pointers
// Slower search compared to arrays