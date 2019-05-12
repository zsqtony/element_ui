import { getStorage } from "./auth.js";

export function getTokes() {
  let retst = sessionStorage.ce87_userinfo ? true : false;
  return retst;
}
