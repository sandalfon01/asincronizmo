const promise= new Promise(function(resolve, reject){
    resolve('Hey!')
});

const cows= 15;
const countCows= new Promise(function(resolve, reject){
    if(cows>10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject('ther is on cowe on farm');
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((Error) => {
    console.log(Error);
}).finally(()=> console.log('Funally'));