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

    describe('Removing a duplicate from an array of sorted values', () => {
        describe('removeSortedDuplicates', () => {
            it('should return the index of the array to slice at', () => {
                const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
                expect(test.removeSortedDuplicates(arr1)).toEqual(5);
                const arr2 = [0, 1, 2, 3, 4, 5];
                expect(test.removeSortedDuplicates(arr2)).toEqual(6);
                const arr3 = [0, 0, 0, 0, 0, 0];
                expect(test.removeSortedDuplicates(arr3)).toEqual(1);
                const arr4 = [0, 0, 0, 0, 0, 1];
                expect(test.removeSortedDuplicates(arr4)).toEqual(2);
            });
            it('should slice at the given index and return unique array', () => {
                const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
                const index1 = test.removeSortedDuplicates(arr1);
                expect(arr1.slice(0, index1)).toEqual([0, 1, 2, 3, 4]);
                const arr2 = [0, 1, 2, 3, 4, 5];
                const index2 = test.removeSortedDuplicates(arr2);
                expect(arr2.slice(0, index2)).toEqual([0, 1, 2, 3, 4, 5]);
                const arr3 = [0, 0, 0, 0, 0, 0];
                const index3 = test.removeSortedDuplicates(arr3);
                expect(arr3.slice(0, index3)).toEqual([0]);
                const arr4 = [0, 0, 0, 0, 0, 1];
                const index4 = test.removeSortedDuplicates(arr4);
                expect(arr4.slice(0, index4)).toEqual([0, 1]);
            });
        });

        describe('removeDuplicatesButTwo', () => {
            it('should return the index of the array to slice at', () => {
                const array1 = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
                expect(test.removeDuplicatesButTwo(array1)).toEqual(9);
            });
            it('should slice at the given index and return the unique array', () => {
                const array1 = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
                const index = test.removeDuplicatesButTwo(array1);
                expect((array1.slice(0, index))).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4]);
            });
        });
    });

    describe('Find the majority element', () => {
        describe('majorityElement', () => {
            it('should return the majority element', () => {
                const array1 = [2, 2, 2, 1, 1, 1, 2, 2];
                expect(test.majorityElement(array1)).toEqual(2);
                const array2 = [1, 2, 3, 4, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                expect(test.majorityElement(array2)).toEqual(1);
                const array3 = [1, 0, 1];
                expect(test.majorityElement(array3)).toEqual(1);
            });
        });
    });

    describe('Rotate an array', () => {
        describe('rotate', () => {
            it('should rotate an array to the right by k steps, where k is non-negative', () => {
                const array1 = [1, 2, 3, 4, 5, 6, 7];
                expect(test.rotate(array1, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
                const array2 = [1];
                expect(test.rotate(array2, 0)).toEqual([1]);
                const array3 = [1, 2];
                expect(test.rotate(array3, 3)).toEqual([2, 1]);
                const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
                expect(test.rotate(array4, 38)).toEqual([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
            });
        });
    });


})();