function remove(array, x) {
    for (let i = 0; array[i]; i++) {
        if(i == array.length-1 && array[i] == x)
            array.pop();
        
        if(array[i] == x) {
            array[i] = array.pop();
        }
    }
    return array;
}