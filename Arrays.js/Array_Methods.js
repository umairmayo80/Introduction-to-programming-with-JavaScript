/*
Array length attribute
Array toString() converts an array to a string of (comma separated) array values.
Array pop() The pop() method removes the last element from an array:
Array push() The push() method adds a new element to an array (at the end):
Array shift() The shift() method pops the first array element and "shifts" all other elements to a lower index.
Array unshift() The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: The unshift() method returns the new array length:
Array join() The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
Array delete() Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array.
Array concat() The concat() method creates a new array by merging (concatenating) existing arrays:
Array flat() Flattening an array is the process of reducing the dimensionality of an array. The flat() method creates a new array with sub-array elements concatenated to a specified depth.
Array splice() The splice() method can be used to delete and add new items to an array:
Array slice() method slices out a piece of an array into a new array.
*/



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())


console.log(fruits.join("->"));
console.log(fruits);




const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys,12,fruits);
console.log(myChildren)
console.log(myChildren.length);


// Add new item at end using lentght
myChildren[myChildren.length] = "Basd"
console.log(myChildren)




const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)





// Splice example
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// fruits1.splice(2, 1, "Lemon", "Kiwi",[1,2]);
fruits1.splice(2, 1, "Lemon", "Kiwi",...[1,2]);
console.log(fruits1)

/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
*/


console.log(fruits1.slice(1,4))