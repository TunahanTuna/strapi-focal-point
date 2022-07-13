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
  {
    method: "PUT",
    path: "/update/:id",
    handler: "focal.update",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "focal.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
];
