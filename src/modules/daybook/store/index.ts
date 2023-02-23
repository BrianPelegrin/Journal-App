import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";
import state from "./state";

const dayBookModule = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default dayBookModule;
