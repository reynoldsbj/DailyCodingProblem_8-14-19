/**
 * Description: Given a list of numbers and a number k, return whether any two numbers 
 * from the list add up to k.
 * 
 * Example: For the inputs arr = [10, 15, 3, 7] and k = 17, return true since 10 + 7 is 17.
 * 
 * Bonus: Can you do this in one pass?
 */

function SolveProblem(arr, k) {
    if (arr === null || arr.length < 2)
        return false;

    arr.sort();

    var i = 0;
    var j = arr.length-1;
    var sum = 0;
    while (i < j) {
        sum = arr[i] + arr[j];
        if (sum === k) {
            return true;
        }
        else if (sum > k) {
            j--;
        }
        else {
            i++;
        }
    }
    return false;
}
 