//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){return []}

    const treeLevelMap = {};
    const queue = [{node:root, level:0}];// FIFO
    const rightView = [];

    while(queue.length){
        let {node, level} = queue.shift();
        if(treeLevelMap[level]){
            treeLevelMap[level].push(node.val);
        }else{
            treeLevelMap[level] = [node.val];
        }
        if(node.left){
            queue.push({node: node.left, level: level+1});
        }
        if(node.right){
            queue.push({node: node.right, level: level+1});
        }
    }

    Object.values(treeLevelMap)
        .forEach((nodesByLevel) => rightView.push(nodesByLevel.pop()));

    console.log(treeLevelMap);
    return rightView;

};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);

console.log(rightSideView(root));


