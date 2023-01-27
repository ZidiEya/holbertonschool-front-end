/*
function named countPrimeNumbers:
    It will return the number of prime numbers from 2 to 100
    Log to the console the time in milliseconds to execute the function in this format: Execution time of printing countPrimeNumbers was <time used> milliseconds.
Requirements:
    You must use performance API to measure the time needed to execute the function (performance.now())
    Your code should display something in the range of Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.
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
    const t1 = performance.now()
    console.log(`Execution time of printing countPrimeNumbers was ${t0 - t1} milliseconds.`)
}
