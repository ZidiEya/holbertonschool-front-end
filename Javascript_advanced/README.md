


                                  GitHub repository: holbertonschool-web_front_end
Directory: Javascript_advanced



Here’s the implementation for Task 11: Changing stack order using setTimeout (11-prime.js).
We’ll reuse the countPrimeNumbers function and delay the execution using setTimeout to shift the work to the end of the call stack

✅ Key Points:
setTimeout(..., 0) is used to delay execution until after the current call stack is cleared.

performance.now() is used to measure the execution time.

Output will show execution time similar to ~0.04 ms, because timing starts before setTimeout, and by the time it runs, the stack is mostly clear.
