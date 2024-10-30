function binarySearch(sortedArray,key){
    let start = 0;
    let end = sortedArray.length -1;

    while (start<= end){
        let middle = math.floor((start+end)/2);

        if (sortedArray[middle]= key){
            return middle;
        } else{
            start = middle +1;
        } else{
            end=middle-1;
        }
    }
    return -1;
}

let array = [1,2,3,4,5,6,7,8,9];
let ele = 7;
let result = binarySearch(array,ele);

if (result < 0){
    console.log("The element is not in the array");
} else{
    console.log(`Element ${ele} is in the array at index ${result}.`);
}