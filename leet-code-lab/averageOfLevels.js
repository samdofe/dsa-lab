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
var averageOfLevels = function(root) {
    if(!root){return null;}
    let queue = [{node:root, level:0}];
    /**
     {
     0: [3],
     1: [9, 20],
     2: [15, 7]
     }
     **/
    const treeLevels = {};//BFS
    const averagePerLevel = [];

    while(queue.length){
        let {node, level} = queue.shift();
        if(treeLevels[level]){
            if(treeLevels[level].indexOf(node.val) === -1){
                treeLevels[level].push(node.val);
            }
        }else{
            treeLevels[level] = [node.val];
        }
        if(node.left){
            queue.push({node: node.left, level: level+1});
        }
        if(node.right){
            queue.push({node: node.right, level: level+1});
        }
    }



    Object.entries(treeLevels)
        .forEach(([key, levelNodes]) => {
            if(key === "0"){
                averagePerLevel.push((levelNodes[0]).toFixed(5));
            }else{
                let average = 0;
                for(let i=0; i<levelNodes.length; i++){
                    average = levelNodes[i] ? average + levelNodes[i] : average;
                }
                averagePerLevel.push((average/levelNodes.length).toFixed(5));
            }
        })

    return averagePerLevel;

};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(15);
root.left.right = new TreeNode(7);
//root.left = new TreeNode(1);

console.log(averageOfLevels(root));
