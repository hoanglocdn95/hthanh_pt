import * as Server from "./api";
class UserServer {
  ReqRegister = (data, callBack) => {
    Server.POST("register", { register: data }, callBack);
  };
  ReqLogin = (data, callBack) => {
    Server.POST("login", { login: data }, callBack);
  };
  ReqGetInfo = (data, callBack) => {
    Server.GET("accounts", data, callBack);
  };
}

const userServer = new UserServer();
export default userServer;
