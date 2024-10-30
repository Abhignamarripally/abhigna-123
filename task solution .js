class Node {
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head ={
            value : value;
            next : null;
            previous : null;
        };
        this.length = 1;
        this.tail = this.head;
    }

    printList(){
        let array = [];
        let current = this.head;
        while (current != null){
            array.push(current.value);
            current = current.next;
        }

        console.log(array.join("<------>"));
        return this;
    }

    append(value){
        let newNode = newNode(value);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
        this.printList();
    }

    prepend(value){
        let newNode = newNode(value);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
        this.printList();
    }

    Insert(index,value){
        if(! Number.isInteger(index) &&index > this.length + 1){
            console.log(`Invalid index.current length is ${this.length}.`);
            return this;
       }

       if(index=0){
        this.prepend(value);
        return this;
       }

       if(index = this.length){
        this.append(value);
        return this;
       }

       let newNode = new Node(value);
       let previous = this.head;

       for (let k = 0; k < index -1; k++){
        previous = previous.next;
       }

       let next = previous.next;

       newNode.next = next;
       previous.next = newNode;
       newNode.previous = previous;
       next.previous = newNode;

       this.length++;
       this.printList();
    }
}

let myDoublyList = new DoublyLinkedList(10);

myDoublyList.append(5);

myDoublyList.append(16);

myDoublyList.prepend(1);

myDoublyList.Insert(2,99);
myDoublyList.Insert(20,88);
myDoublyList.Insert(5,80);
myDoublyList.Insert(0,80);