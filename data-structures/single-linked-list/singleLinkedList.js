class Node {
    constructor(value, next){
        this.value = value;
        this.next = next ?? null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    traverse(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    pop(){
        if(this.length){
            let currentNode = this.head;
            let previousNode = null;
            while(currentNode.next){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if(previousNode){
                previousNode.next= null;
                this.tail = previousNode;
            }else{
                this.head = null;
                this.tail = null;
            }

            this.length--;
            return currentNode;
        }

        return undefined;
    }
    shift(){
        if(!this.length) return undefined;
        let currentNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = currentNode.next;
        }
        this.length--;
        return currentNode;
    }
    unshift(value){
        let node = new Node(value);
        if(this.length){
            node.next = this.head;
        }else{
            this.tail = node;
        }
        this.head = node;
        this.length++;
        return this;
    }
    get(index){
        if(this.length && index < this.length && index >= 0){
            let nodeIndex = 0;
            let node = this.head;

            while(nodeIndex<index){
                node = node.next;
                nodeIndex++;
            }

            return node;
        }

        return null;
    }
    set(value, index){
        let node = this.get(index);
        if(node) node.value = value;

        return node ?? false;
    }
    insert(value, index){
        if(index < 0 || index > this.length) return false;
        if(index ===  this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let prev = this.get(index-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length-1) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();
        const prevNode = this.get(index-1);
        const removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        removeNode.next = null;
        this.length--
        return removeNode;
    }
    reverse(){
        if(this.length <= 1) return this;
        let newTail = this.head;
        let secondTail = newTail.next;
        newTail.next = null;
        this.tail = newTail;
        let pendingNodes = secondTail.next;

        while(secondTail){
            secondTail.next = newTail;
            newTail = secondTail;
            secondTail = pendingNodes
            if(secondTail){
                pendingNodes = secondTail.next;
            }else{
                this.head = newTail;
            }
        }

        return this;
    }
}

const sLL = new SingleLinkedList();
sLL.push(80);
sLL.push(81);
console.log(sLL.push(85));
sLL.traverse();
console.log(sLL.shift());
/*console.log(`POP : `);
console.log(sLL.pop());
console.log(sLL.pop());
console.log(sLL.pop());
*/
console.log(sLL.shift());
console.log(sLL.shift());
sLL.traverse();
console.log(sLL.length);
console.log(sLL.unshift(70));
console.log(sLL.unshift(50));
console.log(sLL.unshift(48));
sLL.traverse();
console.log(sLL.get(-1));
console.log(sLL.get(0));
console.log(sLL.get(1));
console.log(sLL.get(2));
console.log(sLL.get(3));
console.log(sLL.set(89, 2));
console.log(sLL.set(89, 7));
console.log(sLL.insert(49, 1));
console.log(sLL.insert(101, 4));
sLL.traverse();
console.log(sLL.remove( 1));
sLL.traverse();
console.log("REVERSE : ");
console.log(sLL.reverse());
sLL.traverse();