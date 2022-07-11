import { request } from "@strapi/helper-plugin";

const focalPointRequest = {
  createData: async (data) => {
    return await request("/focal/create", {
      method: "POST",
      body: data,
    });
  },
};

export default focalPointRequest;
