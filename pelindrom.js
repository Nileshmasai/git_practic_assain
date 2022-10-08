let str="aman"
function revers(string){
    let string="aman";
    let bag="";
    for(let i=str.length-1;i>=0;i--){
        bag=bag+string[i]; //concatinat
    }
    return bag;
}

let rev_str=revers("aman");

if(str==rev_str){
    console.log("pelindrom");
}else{
    console.log("NA");
}