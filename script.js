// Create the set
var mySet = new Set()
// #1 - Add - add the value
mySet.add(90)
mySet.add('Kaveh')
mySet.add({name : 'Kaveh'})
mySet.add([1,2,3,4,5,6])

//Show the values
for (var showValues of mySet) {
    console.log(showValues)
} // Output ==> 90 Kaveh { name: 'Kaveh' } [ 1, 2, 3, 4, 5, 6 ]

// #2 - Delete
mySet.delete(90)
console.log(mySet) // Output ==> 90 is deleted

// #3 - Clear
mySet.clear()

// #4 - Has
mySet.has(90)

// #5 - Size
console.log(mySet.size)

/* There is a diffrence between Set and Array, the diffrent is in Array when we want to store repeatedly values,
it show those values,however, in Set we have no repeatedly values and it clear them automatically in our set,
pay attention to Set below */

var numbers = [1,2,3,3,3,4,4,5,6]
var numbersChanged = new Set(numbers)

for (var count of numbersChanged) {
    console.log(count)
} // Output ==> 1 2 3 4 5 6 . in Set the repeatedly values has been deleted automatically.



