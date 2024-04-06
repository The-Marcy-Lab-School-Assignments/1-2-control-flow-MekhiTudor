const measureRainSwitch = (inches) => {
  switch (inches) {
    case 0:
      console.log("drought");
      break;
    case 1:
      console.log("dry");
      break;
    case 2:
      console.log("average");
      break;

    case 3:
      console.log("average");
      break;
    case 4:
      console.log("rainy");
      break;
    case 5:
      console.log("rainy");
      break;
    case 6:
      console.log("flood");
      break;
    case 7:
      console.log("flood");
      break;
    case 10:
      console.log("flood");
      break;
  }
};

console.log(measureRainSwitch(0))

const rounderSwitch = (float, roundSetting) => {
  switch (roundSetting) {
    case "up":
      return Math.ceil(float);
      break;
    case "down":
      return Math.floor(float);
      break;
    case "honest":
      return Math.round(float);
      break;

  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
