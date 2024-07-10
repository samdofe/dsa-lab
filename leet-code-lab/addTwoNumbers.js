

function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const getNumber = (list) => {
        let stack = [];
        let head = list;
        let sNum = "";

        while(head){
            stack.push(head.val.toString());
            head = head.next;
        }

        while(stack.length){
            sNum += stack.pop();
        }

        return BigInt(sNum);
    }


    const l1Num = getNumber(l1);
    const l2Num = getNumber(l2);
    const sResultSum = (l1Num + l2Num).toString().split("");
    let head= new ListNode(parseInt(sResultSum.shift()));

    while(sResultSum.length){
        let temp = new ListNode(Number(sResultSum.shift()));
        temp.next = head;
        head = temp;
    }

    return head;
};

function createList(arr){
    let header = new ListNode(arr.shift());
    while(arr.length){
        let temp = new ListNode(arr.shift());
        temp.next = header;
        header = temp
    }

    return header;
}

const la = new ListNode(3);
const lb = new ListNode(4);
lb.next = la;
const lc = new ListNode(2);
lc.next = lb;

const ld = new ListNode(4);
const lf = new ListNode(6);
lf.next = ld;
const lg = new ListNode(5);
lg.next = lf;

const list1 = createList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const list2 = createList([5,6,4]);


console.log(JSON.stringify(addTwoNumbers(list1, list2)));

