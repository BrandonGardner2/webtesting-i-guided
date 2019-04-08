module.exports = {
  add
};

function add(...args) {
  return args.reduce((sum, cur) => sum + cur, 0);
}
