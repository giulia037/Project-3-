const db = require('../config/connection');
const { User, Dogs } = require('../models');
const dogsSeeds = require('./dogsSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Dogs.create(dogsSeeds);
  await Dogs.deleteMany({});
  await User.create(userSeeds);
  await User.deleteMany({});


  console.log('all done!');
  process.exit(0);

})
