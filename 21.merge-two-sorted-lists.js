/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const sentinel = {
        val: -1,
        next: null
    }

    let head = sentinel
    while (l1 && l2) {
        if (l1.val > l2.val) {
            head.next = l2
            l2 = l2.next
        } else {
            head.next = l1
            l1 = l1.next
        }
        
        head = head.next
    }

    head.next = l1 || l2

    return sentinel.next
};
// @lc code=end

