

(() => {
    'use strict'

    window.test = {};

    // Start at the end of num2s and the last element of nums1
    // Compare
    // If nums2[val] > nums1[val] then copy nums2[val] to end of nums1 (endPointer needed)
    // If nums2[val] <= nums1[val] then swap nums1[val] with endPointer in nums1
    /**
     * Merges two sorted arrays in O(n+m) time
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    test.mergeSorted = function(nums1, m, nums2, n) {
        let endPtr = nums1.length - 1;
        let n1Ptr = m - 1;
        let n2Ptr = n - 1;
        
        // Pass nums2 array into nums1 array and return because nums1 has nothing in it
        if(n1Ptr < 0) {
            for(let i = n2Ptr; i >= 0; i--){
                nums1[i] = nums2[i];
            }
        }
        
        while (n1Ptr >= 0 && n2Ptr >= 0) {
            
            if (nums2[n2Ptr] >= nums1[n1Ptr]) {
                nums1[endPtr] = nums2[n2Ptr];
                n2Ptr--;
                endPtr--;
            } else {
                nums1[endPtr] = nums1[n1Ptr];
                n1Ptr--;
                endPtr--;
            }
            
            if(n1Ptr < 0) {
                for(let i = n2Ptr; i >= 0; i--){
                    nums1[i] = nums2[i];
                }
            }
        }

        while (n2Ptr > 0) {
            nums1[endPtr] = nums2[n2Ptr];
            n2Ptr--;
            endPtr--;
        }

        return nums1;
        
    }

    /**
     * Removes an array value in place.
     * Line up your cards in a row. Keep your left hand on the first card.
     * Scan along with your right hand.
     * When you reach any other value other than the value you wish to remove
     * copy it over to where your left is and then move your left hand one value over.
     * When you reach the end of the array, keep the slice of the array of where
     * your left hand is.
     */
    test.removeArrayVal = function(nums, val) {
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }


})();