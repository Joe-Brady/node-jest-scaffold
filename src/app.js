const { getChuckNorrisJoke } = require("./connectors");
const { double } = require("./services");

const app = async () => {
  console.log(double(5));
  console.log(await getChuckNorrisJoke());
};

app();
