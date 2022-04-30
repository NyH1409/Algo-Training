export let tmpprochedezéro = (tmpList)=>{
    let liste = tmpList.split(" ");
    
    
    liste.sort((a,b)=>Math.abs(parseInt(a))-Math.abs(parseInt(b)));
    if(tmp.length == 0){
        return 0;
    }
    if(Math.abs(parseInt(liste[0]))==Math.abs(parseInt(liste[1]))){
        if(parseInt(liste[0])>0){
            return parseInt(liste[0])
        }
        else{
            return parseInt(liste[1]);
        }
    }
    return parseInt(liste[0]);
}
