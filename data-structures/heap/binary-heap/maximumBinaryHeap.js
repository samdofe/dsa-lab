class MaximumBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(value){
        if(!this.values.length){
            this.values.push(value);
        }else {
            this.values.push(value);
            this.bubbleUp();
        }
    }
    bubbleUp(){
        let addedIdx = this.values.length-1;
        while(addedIdx > 0){
            let parentIdx = Math.floor((addedIdx-1)/2);
            if(this.values[parentIdx] > this.values[addedIdx]) break;
            [this.values[parentIdx], this.values[addedIdx]] = [this.values[addedIdx], this.values[parentIdx]];
            addedIdx = parentIdx;
        }
    }
    extractMax(){
        if(this.values.length <= 2) {
            this.values.shift();
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
                if(leftChild > this.values[rootIdx]){
                    newRootIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx];
                if(newRootIdx){
                    if(rightChild > this.values[newRootIdx]){
                        newRootIdx = rightChildIdx;
                    }
                }else{
                    if(rightChild > this.values[rootIdx]){
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

const heap = new MaximumBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);