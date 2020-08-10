function heapify(auxiliaryArray, n, i, animations) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && auxiliaryArray[l] > auxiliaryArray[largest]) {
        largest = l;
    }
    if (r < n && auxiliaryArray[r] > auxiliaryArray[largest]) {
        largest = r;
    }

    if (largest != i) {
        let tmp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[largest];
        auxiliaryArray[largest] = tmp;

        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, largest]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, largest]);
        // We overwrite the value at index i and largest by swapping them in the auxiliaryArrayay with the
        animations.push([i, auxiliaryArray[i]]);
        animations.push([largest, auxiliaryArray[largest]]);

        heapify(auxiliaryArray, n, largest, animations);
    }
}


function heapSortHelper(n, auxiliaryArray, animations) {
    for (let i = n / 2; i >= 0; --i) {
        heapify(auxiliaryArray, n, i, animations);
    }

    for (let i = n - 1; i > 0; --i) {
        let tmp = auxiliaryArray[0];
        auxiliaryArray[0] = auxiliaryArray[i];
        auxiliaryArray[i] = tmp;

        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([0, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([0, i]);
        // We overwrite the value at index i and 0 by swapping them in the auxiliaryArray with the
        //respective swapped values
        animations.push([0, auxiliaryArray[0]]);
        animations.push([i, auxiliaryArray[i]]);

        heapify(auxiliaryArray, i, 0, animations);
    }
}
export function heapSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    heapSortHelper(auxiliaryArray.length, auxiliaryArray, animations);
    return animations;
}

