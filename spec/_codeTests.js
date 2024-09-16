(() => {
    'use strict'


    describe('Merge Sorted Arrays', () => {
        describe('mergeSorted', () => {
            it('should return a sorted array', () => {
                const nums1 = [1, 2, 3, 0, 0, 0];
                const m = 3;
                const nums2 = [2, 5, 6];
                const n = 3;
                expect(test.mergeSorted(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
                const nums3 = [1];
                const m2 = 1;
                const nums4 = [];
                const n2 = 0;
                expect(test.mergeSorted(nums3, m2, nums4, n2)).toEqual([1]);
                const nums5 = [0];
                const m3 = 0;
                const nums6 = [1];
                const n3 = 1;
                expect(test.mergeSorted(nums5, m3, nums6, n3)).toEqual([1]);
                const nums7 = [2, 0];
                const m4 = 1;
                const nums8 = [1];
                const n4 = 1;
                expect(test.mergeSorted(nums7, m4, nums8, n4)).toEqual([1,2]);
                const nums9 = [0, 0, 0, 0, 0];
                const m5 = 0;
                const nums10 = [1, 2, 3, 4, 5];
                const n5 = 5;
                expect(test.mergeSorted(nums9, m5, nums10, n5)).toEqual([1,2, 3, 4, 5]);
            });
        });
    });

    describe('Removing a value from an array', () => {
        describe('removeArrayVal', () => {
            it('should return the index of the array to slice at', () => {
                const arr = [0, 1, 2, 2, 3, 0, 4, 2];
                const val = 2;
                const arr2 = [3, 2, 2, 3];
                const val2 = 3;
                expect(test.removeArrayVal(arr, val)).toEqual(5);
                expect(test.removeArrayVal(arr2, val2)).toEqual(2);
            });
            it('should give a slice of the array', () => {
                const arr = [0, 1, 2, 2, 3, 0, 4, 2];
                const val = 2;
                const arr2 = [3, 2, 2, 3];
                const val2 = 3;
                const index = test.removeArrayVal(arr, val);
                console.log(index);
                expect(arr.slice(0, index)).toEqual([0, 1, 3, 0, 4]);
                const index2 = test.removeArrayVal(arr2, val2);
                console.log(index2);
                expect(arr2.slice(0, index2)).toEqual([2, 2]);
            });
        });
    });


})();