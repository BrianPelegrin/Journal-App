import { createStore } from "vuex";
import dayBookModule from "@/modules/daybook/store";
import formMakerModule from "@/modules/form-maker/store";

const store = createStore({
  modules: {
    dayBookModule,
    formMakerModule,
  },
});

export default store;
