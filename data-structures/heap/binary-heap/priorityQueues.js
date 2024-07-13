// MIN BINARY HEAP

class Node{
    constructor(val, priority){
        this.val = val !== undefined ? val : null;
        this.priority = priority !== undefined ? priority : null;
    }
}


class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        if(!this.values.length){
            this.values.push(newNode);
        }else {
            this.values.push(newNode);
            this.bubbleUp();
        }
    }
    bubbleUp(){
        let addedIdx = this.values.length-1;
        while(addedIdx > 0){
            let parentIdx = Math.floor((addedIdx-1)/2);
            if(this.values[parentIdx].priority <= this.values[addedIdx].priority) break;
            [this.values[parentIdx], this.values[addedIdx]] = [this.values[addedIdx], this.values[parentIdx]];
            addedIdx = parentIdx;
        }
    }
    dequeue(){
        if(this.values.length <= 1) {
            return this.values.shift();
        }
        let lastIdx = this.values.length-1;
        [this.values[0], this.values[lastIdx]] = [this.values[lastIdx], this.values[0]];
        let removeNode = this.values.pop();
        this.sinkDown();
        return removeNode;
    }
    sinkDown(){
        let rootIdx = 0;
        while(this.values[rootIdx]){
            let leftChildIdx = (2*rootIdx)+1
            let rightChildIdx = leftChildIdx + 1;
            let leftChild, rightChild;
            let newRootIdx= null;
            if(leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < this.values[rootIdx].priority){
                    newRootIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx];
                if(newRootIdx){
                    if(rightChild.priority < this.values[newRootIdx].priority){
                        newRootIdx = rightChildIdx;
                    }
                }else{
                    if(rightChild.priority < this.values[rootIdx].priority){
                        newRootIdx = rightChildIdx;
                    }
                }
            }
            if(!newRootIdx) break;
            [this.values[rootIdx],this.values[newRootIdx]]=[this.values[newRootIdx], this.values[rootIdx]];
            rootIdx = newRootIdx;
        }
    }
}

const ER = new PriorityQueue();
ER.enqueue("Common cold", 5);
ER.enqueue("Gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER.values);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
