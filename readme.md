## Event Loop

## what is the event loop

The JavaScript event loop is a fundamental mechanism that enables asynchronous operations in a single-threaded environment. It ensures that tasks are executed efficiently without blocking the main thread, making web applications responsive.

## why it is nescesary

Javascript is a single threaded language,as such it has only one line of logic process which could lead to the entire application halting in the case of a long running function. So the event loop aims to delegate long tasks to external APIs so that its single thread doesnt get locked by them.

## how it works

first the code is send to the call stack Synchronously then its executed.

if an asynchronous operation is encountered (e.g., setTimeout, fetch, promise), it's passed to the relevant Web API.
then the Web API handles the asynchronous task in the background.
Once the asynchronous task completes, its callback function is added to the Callback Queue or Microtask Queue.
The Event Loop continuously checks if the Call Stack is empty If its empty, the Event Loop moves the callback functions from the Microtask Queue to the Call Stack.
After the Microtask Queue is empty, the Event Loop moves callbacks from the Callback Queue to the Call Stack for execution.

![alt text](/image.png)