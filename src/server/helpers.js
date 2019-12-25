const simplePassword = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    str += parseInt(Math.random() * 10 - 1);
  }
  return str;
};

const password = simplePassword();

module.exports = {
  password
};
