// Create a function to count the number of 1s in a 2D array.


// your code here
const countOnes = function(arr){
    let count = 0;

    for (i = 0 ; i < arr.length; i++) {
        

        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                count += 1;
            }
        }

    }

    return count
}


console.log(countOnes([
    [1, 0],
    [0, 0]
]))

// should return 1

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
]));

// should return 7

console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
]))

//should return 2
