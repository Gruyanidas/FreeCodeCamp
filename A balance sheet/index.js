// Only change code below this line
class Thermostat {
    constructor(F){
      this.F = F;
    }
    get temperature(){
    const C = 5/9 * (this.F - 32);
    return C;
    }
    set temperature(C){
      this.C = C;
      this.F = (C * 9) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
