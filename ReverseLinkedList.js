var reverseList = function(head)
{
    
    // If the list is empty or has one element, nothing to reverse
    if(!head || !(head.next)) return head;
    
    /* Dealing the one element case as base case is necessary */
    
    // Reverse the list except the first element
    var reversedHead = reverseList(head.next);
    
    /* Observe that reversedHead would be the last element in the original list */ 
    /* The tricky part is that you still have access to the last element in the reversed list */
    /* This makes it O(n) instead of O(n^2) */
    
    var newLastElement = head.next;
    
    // If the last element exists, connect it to the first element
    if(newLastElement) newLastElement.next = head;
    
    // Block the unnecessary access of the previous head
    head.next = null;

    // Remember to return the new head
    return reversedHead;
};

var reverseList = function(head) {
    let next, prev = null;
   
   for (let i = head; head; i++){
       next = head.next;
       head.next = prev;
       prev = head;
       head = next;
   }
   
   return prev;
};

var list = {val1: 1, next: { val2: 2, next: {val3: 3, next:{val4: 4, next: {val5: 5, next: null}}}}};
console.log(reverseList(list));