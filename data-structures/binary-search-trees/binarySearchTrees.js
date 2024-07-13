class Node {
    constructor(val, left, right){
        this.val = (val !== undefined) ? val: null;
        this.left = (left !== undefined) ? left: null;
        this.right = (right !== undefined) ? right: null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let currentRoot = this.root;
        while(true){
            if(value === currentRoot.val){
                return this;
            }
            if(value < currentRoot.val){
                if(!currentRoot.left){
                    currentRoot.left = newNode;
                    return this;
                }
                currentRoot = currentRoot.left;
            }else{
                if(!currentRoot.right){
                    currentRoot.right = newNode;
                    return this;
                }
                currentRoot = currentRoot.right;
            }
        }

    }
    contains(value){
        if(!this.root) return false;
        let currentRoot = this.root;
        let founded = false;
        while(currentRoot && !founded){
            if(value === currentRoot.val) {
                founded = true;
            }
            if(value < currentRoot.val){
                currentRoot = currentRoot.left;
            }else{
                currentRoot = currentRoot.right;
            }
        }

        return founded;
    }
}

const BST = new BinarySearchTree();
BST.insert(10);
console.log(BST);
BST.insert(5);
console.log(BST);
BST.insert(3);
BST.insert(15);
BST.insert(16);
console.log(BST);
console.log(BST.contains(10));
console.log(BST.contains(16));
console.log(BST.contains(100));