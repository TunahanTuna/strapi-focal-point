module.exports = [
  {
    method: "POST",
    path: "/create",
    handler: "focal.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/",
    handler: "focal.find",
    config: {
      policies: [],
      auth: false,
    },
  },
];
