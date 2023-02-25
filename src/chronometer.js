class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  
    
start(printTimeCallback) {
  // ... your code goes here
  this.intervalId=setInterval( ()=>{
    if (printTimeCallback) printTimeCallback();
    this.currentTime++;
  },1000);
}
 
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
   
    return (("0" + value).slice(-2));
   
    
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    this.intervalId=null;
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here

  }
}
