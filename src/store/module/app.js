import { setStorage, getStorage } from "@/utils/auth";
const app = {
  state: {
    user_info: getStorage("ce87_userinfo")
      ? JSON.parse(getStorage("ce87_userinfo"))
      : {}
  },
  mutations: {
    USER_INFO: state => {
      let info = { name: "admin", token: "nihao123456789" };
      state.user_info = info;
      setStorage("ce87_userinfo", JSON.stringify(info));
    },
    USER_LOGOUT: state => {
      sessionStorage.clear();
    }
  },
  actions: {
    login({ commit }) {
      return new Promise((resolve, reject) => {
        commit("USER_INFO");
        resolve(true);
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("USER_LOGOUT");
        resolve(true);
      });
    }
  }
};
export default app;
