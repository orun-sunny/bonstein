function findIndices(targetSum, numbers) {
    //  each pair of numbers
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the pair adds up to the target sum
            if (numbers[i] + numbers[j] === targetSum) {
                return [i, j]; // Return the indices if found
            }
        }
    }

    // If no such indices are found
    return null;
}


const targetSum = 20;
//check index number here
const numbers = [1, 2, 4, 5, 7, 9, 11];

const result = findIndices(targetSum, numbers);

if (result) {
    console.log(`Indices of sum ${targetSum}: ${result}`);
} else {
    console.log("No indices found.");
}
