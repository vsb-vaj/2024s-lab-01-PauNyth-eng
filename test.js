import  * as module from './task-array.js';



let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}
 const vehicles = [
   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
 ];
module.printArray(numbers);
module.printAverage(numbers);
module.printFirstItem(numbers);
module.printLastItem(numbers);
module.printLargestItem(numbers);
module.printLength(numbers);
module.printSALDifference(numbers);
module.printSmallestItem(numbers);
module.printSum(numbers);
module.printNumsMultipliedBy2(numbers);