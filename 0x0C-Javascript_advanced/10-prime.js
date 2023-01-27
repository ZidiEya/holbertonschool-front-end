/*
Reusing the func countPrimeNumbers from 9-prime.js (copy/paste)
    Execute the function countPrimeNumbers 100 times
    Log to the console the time in milliseconds to execute the func 100 times
Requirements:
    Your code should display something in the range of Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.
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
console.log(`Execution time of calculating prime numbers 100 times was ${init - end} milliseconds.`);
