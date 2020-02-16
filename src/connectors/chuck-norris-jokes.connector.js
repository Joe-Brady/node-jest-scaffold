const axios = require("axios");

const getChuckNorrisJoke = async () => {
  const apiResponse = await axios.get(
    "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
  );

  const joke = apiResponse.data.value.joke;

  return joke;
};

module.exports = getChuckNorrisJoke;
