//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let inorderBST = [];

    const inorder = (root) => {
        if(!root){
            return;
        }
        inorder(root.left);
        inorderBST.push(root.val);
        inorder(root.right);
    }

    inorder(root);
    return inorderBST[k-1];
};

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right = new TreeNode(4);

console.log(kthSmallest(root, 1));
