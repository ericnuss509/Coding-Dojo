function swapValues(args) {
    //     var args = Array.prototype.slice.call(arguments);
        var temp = args[0];
        args[0] = args[1];
        args[1] = temp;
        return args
    }
    console.log(swapValues([1,2]))
    

    //another way to swap more than two values
function swapValues(arr){
    return arr.reverse();

}
console.log(swapValues([1,2,3]))