function isPalindrome(x) {
    let len = x.length
    let mid = Math.floor(len/2)
    for(let i=0; i<mid; i++){
      if(x[i].toLowerCase() !== x[x.length-1-i].toLowerCase()){
        return false
      }
    }
     return true
   }