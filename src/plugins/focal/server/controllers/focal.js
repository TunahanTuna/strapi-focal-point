"use strict";

module.exports = {
  async find(ctx) {
    try {
      return await strapi.plugin("focal").service("focal").find(ctx.query);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async create(ctx) {
    try {
      const { data } = ctx.request.body;
      const files = ctx.request.files;

      const parsedData = JSON.parse(data);

      const entry = await strapi.entityService.create("plugin::focal.focal", {
        data: {
          ...parsedData,
        },
        files: {
          file: files["files.file"],
        },
      });
      return entry;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
