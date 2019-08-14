/// 1 ///
function solution(N) {
    var binary = N.toString(2);

    var length = binary.length;
    
    var ones = [];

    for(var i=0; i<length; i++) {
        if (binary[i]=='1') ones.push(i);
    }

    var zeros = binary.split('1');

    var pop = zeros.pop()
    var shift = zeros.shift()

    var returnVar = 0;
    
  for(var i=0; i<zeros.length; i++) {
    if(zeros[i].length > returnVar) {
      returnVar = zeros[i].length
    }
  }
    return returnVar;
}





// 2.1 //
function solution(A) {
    var x;
    var arr = A.sort(function(a, b) {
      return (a - b);
    }); 
    
      
    for (var i = 0; i < arr.length; i+=2) {
      if ((arr[i] !== arr[i+1]) || i+1 == arr.length) return arr[i];  
    } 
  }
  
 // 2.2 //
  function solution(A, K) {
    
    
    var array = A;
    var count = K;
    var arrayLength = array.length
    
    var getLastValue = ""
    
    for (i=1; i <= count ; i++) {
      if(arrayLength != 0){
        getLastValue = array[arrayLength-1]
        array.pop()
        array.splice(0, 0, getLastValue);
      }
    }

console.log(A)
 return A

}

///3.1///
function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 6.4.0)
  return Math.ceil((Y-X)/D)
}

///3.2///
function solution(A) {
  // write your code in JavaScript (Node.js 4.0.0)
  var size = A.length;
  var sum = (size + 1) * (size + 2) / 2;
  for (i = 0; i < size; i++) {
      sum -= A[i];
  }
  return sum;
}

// 3.3 //
function solution(A) {
  let prevSum = A[0];
  let nextSum = A.slice(1, A.length).reduce((a, b) => {
      return a + b;
  });
  let min = Math.abs(nextSum - prevSum);
  for (let i = 1; i < A.length - 1; i++) {
      prevSum += A[i];
      nextSum -= A[i];
      if (Math.abs(prevSum - nextSum) < min) {
          min = Math.abs(prevSum - nextSum);
      }
  }
  return min;
}

// 4.1//
function solution(A) {
  const length = A.length;
  
  var result = A.reduce((result, value) => {
      result[value] = true;
      return result;
  }, {})

  for(var i=1; i<=length; i++){
      if(!result[i]){
          return 0;	
      }
  }

  return 1;
}

// 4.2 //
function solution(X, A) {

  let sequence = [0];
  let position = -1;
  let counter = 0;

  if (X === 1 && A[0] === 1)
      return 0;

  for (let i = 0; i <= A.length - 1; i++) {

      if (A[i] <= X) {
          if (!sequence[A[i]]) {
              counter++;
          }
          
          sequence[A[i]] = A[i];

          if (counter === X) {
              position = i;
              break;
          }
      }
  }
  return position;
}