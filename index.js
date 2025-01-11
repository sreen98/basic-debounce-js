function debounce(fn, delay) {
    let timeout;
  
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
  
      // Set a new timeout to call the function after the delay
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  const fn = debounce((message) => {
    console.log(message);
  }, 300);
  
  // Simulate rapid function calls
  fn("Hello");
  fn("Hello, World!");
  fn("Hello, World!");
  fn("Debounced!"); // Only this should log after 300ms
  
  setTimeout(() => {
    fn("Debounced twice");
  }, 400);