const candidateNum=[];
const lotto=[];
const candidateNum02=[];
const lotto02=[];

for(let i=1;i<6;i++){
    candidateNum.push(i + "조");
}
for(let i=1;i<2;i++) {
    const selectedNum=candidateNum.splice(parseInt(Math.random()*candidateNum.length),1);
    lotto.push(selectedNum[0]);
}
console.log(lotto);

for(let i=0;i<10;i++){
    candidateNum02.push(i);

}
for(let i=0;i<6;i++){
    const selectedNum=candidateNum02.splice(parseInt(Math.random()*candidateNum02.length),1);
    lotto02.push(selectedNum[0]);
};
console.log(lotto02);