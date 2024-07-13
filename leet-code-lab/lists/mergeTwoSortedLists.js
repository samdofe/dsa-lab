
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //edge cases :
    if(!list1 && !list2) return null;
    if(!list1) return list2;
    let resultList = null;
    let currentNode = null;
    let smallerNode = null;


    while(list1 && list2){
        if(list1.val <= list2.val){
            smallerNode = list1;
            list1 = list1.next;
        }else{
            smallerNode = list2;
            list2 = list2.next;
        }
        if(!resultList){
            resultList = smallerNode;
            currentNode = resultList;
        }else{
            currentNode.next = smallerNode;
            currentNode = currentNode.next;
        }
    }

    if(list1){
        currentNode.next = list1;
    }
    if(list2){
        currentNode.next = list2;
    }

    return resultList;

};

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
console.log(list1);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
console.log(list2);

console.log(mergeTwoLists(list1, list2));