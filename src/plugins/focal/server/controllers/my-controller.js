'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('focal')
      .service('myService')
      .getWelcomeMessage();
  },
};
