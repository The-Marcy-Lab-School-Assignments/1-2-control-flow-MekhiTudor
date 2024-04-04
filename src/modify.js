const wildlyBiasedReview = (location) => {
  if (typeof location === 'string') {
    if (location === 'NYC') {
      console.log('THE GREATEST CITY IN THE WORLD');
      console.log('THE CITY THAT NEVER SLEEPS');
      console.log('WOW WHAT A CITY');
    } else {
      console.log('Yea that place is cool I guess');
    }
  } else {
    return 'this isnt a location'
  }
};

module.exports = {
  wildlyBiasedReview,
};
