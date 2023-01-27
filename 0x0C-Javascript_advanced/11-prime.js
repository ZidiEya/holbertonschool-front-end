/*
Reusing the fun countPrimeNumbers from 10-prime.js (copy/paste)
    Log to the console the time in milleseconds to execute the fun 100 times
    Find a way to actually do most of the calculation at the end of the execution stack
Requirements:
    Your code should display something in the range of Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.
    Use setTimeout keyword to change the stack order
*/
function countPrimeNumbers(){
    const t0 = performance.now();
    let count = 0;
    for (let i = 2; i <= 100; i++){
        let flag = 0;
        for (let j = 2; j < i; j++){
            if (i % j == 0){
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0){
            count++;
        }
    }
    const t1 = performance.now();
    console.log(`Execution time of printing countPrimeNumbers was ${t0 - t1} milliseconds.`);
}
const init = performance.now();
for (let i = 0; i <= 100; i++){
    countPrimeNumbers();
}
const end = performance.now();
setTimeout(() => {
  const alltime = init - end;
  console.log(`Execution time of calculating prime numbers 100 times was ${alltime} milliseconds.`);
}, 0);
