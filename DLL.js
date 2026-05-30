class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this.printForward()
    }

    prepend(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
        return this.printForward()
    }

    deleteFront(){
        if(!this.head) return;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return this.printForward()
    }

    deleteBack(){
        if(this.head) return;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return this.printForward();
    }

    printForward(){
        let current  = this.head;
        let res = '';
        while(current){
            res += current.value + (current.next ? ' ↔ ' : '');
            current = current.next;
        }
        console.log(res)
    }

    printBackward(){
        let current  = this.tail;
        let res = '';
        while(current){
            res += current.value + (current.prev ? ' ↔ ' : '');
            current = current.prev;
        }
        console.log(res)
    }
}


const dll = new DoublyLinkedList();
dll.append(2)
dll.prepend(1)
dll.printBackward()
dll.append(3)
dll.append(4)
dll.prepend('a')
dll.append('z')
dll.deleteFront()
dll.deleteBack()
dll.printForward()
dll.printBackward()