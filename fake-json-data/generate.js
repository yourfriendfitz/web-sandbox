module.exports = function() {
  var faker = require("./fake-person-maker/node_modules/faker");
  var _ = require("lodash");
  return {
    people: _.times(50, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      };
    }),
    card: _.times(50, function(n) {
      return {
        id: n,
        card: faker.helpers.createCard(),
      };
    })
  };
};
