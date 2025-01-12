function throttlePls(fn,delay){
    let lastExecutedTime=null;
    let timerId=null;
    
    return function(...args){
        if(!lastExecutedTime){
            fn.apply(this,args)
            lastExecutedTime=Date.now()
        }
        else {
            clearTimeout(timerId)
            timerId=setTimeout(()=>{
    
                if(Date.now()-lastExecutedTime >=delay)
                {fn.apply(this,args)
                 lastExecutedTime=Date.now()}
            },delay-(Date.now()-lastExecutedTime))
           
        }
    }
}

const throttledFunction = throttlePls((msg) => {
  console.log(msg);
}, 2000);

throttledFunction("Call 1"); // Executes immediately
throttledFunction("Call 2"); // Throttled
throttledFunction("Call 3"); // Throttled

setTimeout(() => throttledFunction("Call 4"), 1100);
// Executes after 1.1 seconds
setTimeout(() => throttledFunction("Call 5"), 900);
// throttle
setTimeout(() => throttledFunction("Call 6"), 2100);
