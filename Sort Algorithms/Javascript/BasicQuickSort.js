array = [1,5,3,4,2,6,8,9,7] // an array for testing
function BasicQuickSort(arr){
  if(arr.length <= 1){
    return arr
    //we are making a recursive function (one that will call itself a number of times)
    //this is the statement that will tell the function when it can stop running.
  }
  var pivot = arr.pop(0);
  //I set the pivot to the first item in the array. we pop it off so that nothing happens to it.
  //the function is going to put items smaller than the pivot into the smaller array
  //and items larger than the pivot will go into the larger array
  var larger=[];
  var smaller=[];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] < pivot){//if the item at arr[i] is smaller than the pivot
      smaller.push(arr[i])//push the item into the smaller array
    }
    else{//if the item at arr[i] is larger than the pivot
      larger.push(arr[i])//push the item into the larger array
    }
  }
  return BasicQuickSort(smaller).concat(pivot, BasicQuickSort(larger))
  //this return statement calls the function again for the smaller array and the larger array
  //it will call the function for both sides until they are only 1 item long
}

console.log(BasicQuickSort(array.slice()))//call the BasicQuickSort function and console log the results.
