class Counter {
    constructor(init) {
      this.init = init;
      this.presentCount = init;
    }
  
    increment() {
      this.presentCount += 1;
      return this.presentCount;
    }
  
    decrement() {
      this.presentCount -= 1;
      return this.presentCount;
    }
  
    reset() {
      this.presentCount = this.init;
      return this.presentCount;
    }
  }
  
  var createCounter = function(init) {
    return new Counter(init);
  };

//method two

// var createCounter = function(init) {
//     let presentCount = init;
  
//     function increment() {
//       return ++presentCount;
//     }
  
//     function decrement() {
//         return --presentCount;
//     }
  
//     function reset() {
//         return (presentCount = init);
//     }
  
//     return { increment, decrement, reset };
//   };