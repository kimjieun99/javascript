//const candidateNum=[1,2,3,4,5,...,45];
const animals=["rabbit","tiger","lion"];
console.log(animals.splice(0,1));
console.log(animals);

const candidateNum=[];
const lotto=[];
for(let i=1;i<46;i++) {
    candidateNum.push(i);
}
//console.log("🚀 ~ file: Lotto.js:6 ~ candidateNum", candidateNum);
for(let i=0;i<6;i++){
    const selectedNum=candidateNum.splice(parseInt(Math.random()*candidateNum.length),1);//0~44
    lotto.push(selectedNum[0]);
    //Math.floor(Math.random()*45+1);
    //Math.ceil(Math.random()*45+1);
    //Math.round(Math.random()*45+1);
};
//Math.random()*45;//0+1<Math.random.()*45+1<45+1
lotto.sort(function(a,b){
    return a-b;
    //if(a>b) {
    //    return 1;
    //} else if(a<b) {
    //    return -1;
    //} else {
    //    return 0;
    //}
    //같음.
});
console.log(lotto);