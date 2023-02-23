interface IRouteParams {
  fullPath: string;
  href: string;
  name: string;
  params: {
    id: string;
  };
  path: string;
}

export default {
  name: "daybook",
  component: () => import("@/modules/daybook/layouts/DayBookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("@/modules/daybook/views/NoEntrySelected.vue"),
    },
    {
      path: ":id",
      name: "entry-view",
      component: () => import("@/modules/daybook/views/EntryView.vue"),
      props: (prop: IRouteParams) => {
        return { id: prop.params.id };
      },
    },
  ],
};
