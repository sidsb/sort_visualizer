function bubbleSortHelper(n, auxiliaryArray, animations) {
    for (let i = 0; i < n - 1; ++i) {
        for (let j = 0; j < n - i; ++j) {
            if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
                let tmp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = tmp;

                // These are the values that we're comparing; we push them once
                // to change their color.
                animations.push([j, j + 1]);
                // These are the values that we're comparing; we push them a second
                // time to revert their color.
                animations.push([j, j + 1]);
                // We overwrite the value at index j and j+1 by swapping them in the auxiliaryArray with the
                //respective swapped values
                animations.push([j, auxiliaryArray[j]]);
                animations.push([j + 1, auxiliaryArray[j + 1]]);

            }
        }
    }
}
export function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray.length, auxiliaryArray, animations);
    return animations;
}
