const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought')
  } else if (inches < 2) {
    console.log('dry')
  } else if (inches < 4) {
    console.log('average')
  } else if (inches < 6) {
    console.log('rainy')
  } else if (inches >= 6) {
    console.log('flood')
  }
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!')
  } else if (breed === 'cat' && age < 5) {
    console.log('Mew mew!')
  } else if (breed === 'cat' && age >= 5) {
    console.log('Meow meow!')
  } else if (breed === 'dog' && age < 5) {
    console.log('Arf arf!')
  } else if (breed === 'dog' && age >= 5 && age < 10) {
    console.log('Woof woof!')
  } else if (breed === 'dog' && age >= 10) {
    console.log('Boof!')
  } else {
    console.log('Happy birthday!')
  }
};
const funTypes = (jsType) => {
  if (typeof jsType === 'string') {
    console.log('That\'s just some text.')
  } else if (Number.isNaN(jsType)) {
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === 'number') {
    console.log('That\'s a good number.')
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.")
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.")
  } else if (Array.isArray(jsType)) {
    console.log("I order you to be indexed.")
    /** FEEDBACK: You wrote the same condition twice? */
  } else if (typeof jsType === 'object' && typeof jsType === 'object') {
    console.log("Anybody got the key?")
  }
}

//funTypes([])

const rounder = (float, roundSetting) => {
  if (roundSetting === 'up') {
    return Math.ceil(float)
  } else if (roundSetting === 'down') {
    return Math.floor(float)
  } else if (roundSetting === 'honest') {
    return Math.round(float)
  }
};
//console.log(rounder(1.6, 'honest'))

const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzBuzz!')
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
};
fizzBuzzish(1);


module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
