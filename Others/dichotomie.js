//Dichotomic Search
let dichotomicsearch = (array, element)=>{
    if(array.length == 0 || array.length==1){
        if(array[0]==element){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(array[((array.length-1)/2)]==element){
            return true;
        }
        else{
            if(array[((array.length-1)/2)]> element){
                let newarray1 = array.slice(0, (array.length-1)/2);
                return dichotomicsearch(newarray1,element);
            }
            else{
                let newarray2 = array.slice(((array.length-1)/2), array.length);
                return dichotomicsearch(newarray2, element);
            }
        }
    }
}
