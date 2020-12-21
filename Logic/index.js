/*есть массив рандомных 1,0 - найти первый и последний индекс где большее количество повторений 0

["1010101000101000111001001"] -массив может быть каким угодно */

class ArrClass{
    constructor(fi,li,lenArr){
        this.firstIndex = fi;
        this.lastIndex = li;
        this.lenghtArr = lenArr
    }

    get fIndex(){
        return this.firstIndex
    }

    get lIndex(){
        return this.lastIndex
    }
    
    get lenArr(){
        return this.lenghtArr
    }
}
const arrN = ["0",'1',"1",'1','0',"0","1"];
findIndexArr(arrN)

function findIndexArr (arr){
    let firstIndex = 0,
        lastIndex = 0,
        tempArrLength=0,
        collectionArr = [];
        
    arr.forEach((el,index) => {
        if(el == "0"){
            lastIndex = index
            firstIndex = lastIndex - tempArrLength
            tempArrLength ++
           if(arr[index+1] == "1" || arr[index+1]==undefined){
               collectionArr.push(new ArrClass(firstIndex,lastIndex,tempArrLength))
               tempArrLength = 0;
           }
        } 
    })
    console.log(collectionArr)
    console.log("First",firstIndex, "Last", lastIndex,"Length" ,tempArrLength)
}