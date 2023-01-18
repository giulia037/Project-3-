const db = require('../config/connection');
const { User, Dogs } = require('../models');
const dogsSeeds = require('./dogsSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Dogs.deleteMany({});
  await Dogs.create(dogsSeeds);
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);

})
