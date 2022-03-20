// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
      this.value = value;
      this.next = null;
    }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
      
    }
    for (const value of values) {
      current.next = new LinkedList(value);
    //   console.log(current);
      current = current.next;
      // 这里 current 先被改了 next，然后再 overwrite current
    }
    return this;
  }
}

  
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    var currentNode = linkedList
    while(currentNode !== null){
        var nextNode = currentNode.next;
        while(nextNode !== null && currentNode.value === nextNode.value){
            console.log("--",nextNode.next)
            nextNode = nextNode.next;
        }

        // 用 currentNode.next 指向找到了的下一个 distinct node
        currentNode.next = nextNode;
        // 用 nextNode overwrite currentNode
        currentNode = nextNode;

        console.log(currentNode);
        // currentNode.next = nextNode;
          // 为什么？不能把 47 行这句话写在后面？
          // 因为这里我定死了，currentNote.next 就是 之前得出来的 nextNote，
          // 所以外层的 while 不管怎么跑，currentNote.next 永远等于原来的 nextNode
          // 所以，29 行的 nextNode = 原来的 nextNode, 并且 nextNode.next = 原来的 nextNode，因为我前面定死了
          // 所以，nextNode 在 32 行永远等于上一次循环里的它自己。
          // while loop 永远跑不完
    }
      
    return linkedList;
}

// 下面的 LinkedList(1) 是把 1 作为 value 放入 constructor 中，服了
const input = new LinkedList(1).addMany([1,1,1,3,4,4,4,5,6,6]);

removeDuplicatesFromLinkedList(input);
