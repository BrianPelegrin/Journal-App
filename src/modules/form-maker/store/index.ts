import * as mutations from "../store/mutations";
//import * as actions from "../store/actions"
import * as getters from "../store/getters";
import state from "./state";

const formMakerModule = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default formMakerModule;
