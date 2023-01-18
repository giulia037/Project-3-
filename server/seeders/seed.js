const db = require('../config/connection');
const { User, Dog } = require('../models');
const dogsSeeds = require('./dogsSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Dog.deleteMany({});
  await User.deleteMany({});
  await Dog.create(dogsSeeds);
  await User.create(userSeeds);
  


  console.log('all done!');
  process.exit(0);

})
