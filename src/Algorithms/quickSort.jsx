function partition(auxiliaryArray, low, high, animations) {
    let pivot = auxiliaryArray[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (auxiliaryArray[j] < pivot) {
            i++;
            let tmp = auxiliaryArray[i];
            auxiliaryArray[i] = auxiliaryArray[j];
            auxiliaryArray[j] = tmp;

            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, j]);
            // We overwrite the value at index i and 0 by swapping them in the auxiliaryArray with the
            //respective swapped values
            animations.push([i, auxiliaryArray[i]]);
            animations.push([j, auxiliaryArray[j]]);
        }
    }
    let tmp = auxiliaryArray[i + 1];
    auxiliaryArray[i + 1] = auxiliaryArray[high];
    auxiliaryArray[high] = tmp;

    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i + 1, high]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i + 1, high]);
    // We overwrite the value at index i and 0 by swapping them in the auxiliaryArray with the
    //respective swapped values
    animations.push([i + 1, auxiliaryArray[i + 1]]);
    animations.push([high, auxiliaryArray[high]]);

    return i + 1;
}

function quickSortHelper(auxiliaryArray, low, high, animations) {
    if (low < high) {
        let pi = partition(auxiliaryArray, low, high, animations);

        quickSortHelper(auxiliaryArray, low, pi - 1, animations);
        quickSortHelper(auxiliaryArray, pi + 1, high, animations);
    }
}
export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations;
}