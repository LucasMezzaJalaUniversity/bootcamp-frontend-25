## Event Loop

## what is the event loop

The JavaScript event loop is a fundamental mechanism that enables asynchronous operations in a single-threaded environment. It ensures that tasks are executed efficiently without blocking the main thread, making web applications responsive.

## why it is nescesary

as javascript is a single threaded language, it has only one line of logic process which may lead to the entire application halting in the case of a long running function. So with the event loop we can delegate the long task to external APIs or be resolved later.

## how it works

first the code is send to the call stack Synchronously

then its executed on the Call Stack.
if an asynchronous operation is encountered (e.g., setTimeout, fetch), it's passed to the relevant Web API.
then the Web API handles the asynchronous task in the background.
Once the asynchronous task completes, its callback function is added to the Callback Queue (or Microtask Queue for Promises).
The Event Loop continuously checks if the Call Stack is empty.
If the Call Stack is empty, the Event Loop moves callbacks from the Microtask Queue to the Call Stack.
After the Microtask Queue is empty, the Event Loop moves callbacks from the Callback Queue to the Call Stack for execution.

![alt text](/image.png)