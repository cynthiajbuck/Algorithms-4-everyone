var sampleArr=[2,4,25,26,6,7,0,43,2,6]//a sample array to use for testing
console.log(selectionSort(sampleArr))//call the selectionSort function and console log the result

function selectionSort(arr){
  for(var i=0; i < arr.length-1; i++){
    smallestIndex = i;//set the smallestIndex (index of the smallest number) to i
    for(var j=i+1; j < arr.length; j++){
      if(arr[j] < arr[smallestIndex]){
        smallestIndex=j // if the value at j is greater than the value at the current smallestIndex, set the smallestIndex to j
      }
    }
    temp=arr[smallestIndex]//hold the value at smallestIndex
    arr.splice(smallestIndex, 1)//splice the value at smallestIndex from the array
    arr.splice(i, 0, temp)//insert temp at i
  }
  return arr;//return the sorted array
}
