// 排序的本质?(比较+交换)

//比较
function compare(a, b){
    if(a > b){
        return true
    } else {
        return false
    }
}

//交换
function exchange(arr, indexA,indexB){
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

// 选择排序:
function mySort(arr){

    for(var i = 0; i < arr.length;i++){
        var minIndex = i;
        for(var j = i + 1 ;j <arr.length; j++ ){
            if(compare(arr[minIndex], arr[j])){
                minIndex = j
            }
        }
        exchange(arr,minIndex,i);
    }   

}

//冒泡
function mySort2(arr){
    for(var i = 0; i < arr.length;i++){
        for(var j = 0 ; j < arr.length -1; j++){
            if(compare(arr[j],arr[j + 1])){
                exchange(arr,j,j+1)
            }
        }
    }   

}