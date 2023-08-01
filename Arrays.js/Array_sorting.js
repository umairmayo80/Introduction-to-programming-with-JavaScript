const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits)
fruits.reverse();
console.log(fruits)


/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort())

console.log(points.sort(function(a,b){return a-b}));




// Sorting Object Arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];


cars.sort((a,b)=> a.year -b.year)
console.log(cars)
