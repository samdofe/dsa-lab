
//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let queue = [root];
    let breO = []; //breadth order tree
    while(queue.length){
        let node = queue.shift();
        breO.push(node.val);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }

    //As the tree is of minimal length of 2
    let leftP = 0;
    let rightP = leftP + 1;
    let minAV = Math.abs(breO[rightP] - breO[leftP]);
    let curMinAV = 0;

    while(rightP < breO.length){
        if(breO[rightP] === null){
            breO.splice(rightP, 1);
        }else{
            curMinAV = Math.abs(breO[rightP] - breO[leftP]);
            if(curMinAV < minAV){
                minAV = curMinAV;
            }
            if(rightP === breO.length -1){
                leftP++;
                rightP = leftP + 1;
            }else{
                rightP++;
            }
        }
    }

    return minAV;

};

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(6);

console.log(getMinimumDifference(root));
