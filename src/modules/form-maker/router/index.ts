export default {
  name: "form-maker",
  component: () => import("@/modules/form-maker/layouts/Layout.vue"),
  children: [
    {
      path: "",
      name: "form-maker-main",
      component: () => import("@/modules/form-maker/views/MainMaker.vue"),
    },
  ],
};
