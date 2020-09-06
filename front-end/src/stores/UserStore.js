import { observable, computed, action } from "mobx";
import UserServer from "services/authen";

class UserStore {
  @observable infoUser = {
    name: "Nguyen Huu Thanh",
    phoneNumber: "32352523535",
    certification: "Personal Trainer Certified",
    address: "16 Ly Thuong Kiet",
  };
  @observable username = "cun";
  @observable role = 0;
  @observable id = "sgf782f";
  @observable isEditing = false;
  @observable timesheetAvailable = [];

  @action getInfoUser = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    UserServer.ReqGetInfo(
      {
        header: { headers: { authentization: currentUser.authentization } },
        id: currentUser.id,
      },
      () => {
        this.infoUser = {
          name: currentUser.name,
          phoneNumber: currentUser.phoneNumber ? currentUser.phoneNumber : "0",
          certification: currentUser.certification,
          address: currentUser.address,
        };
        this.username = currentUser.username;
        this.role = currentUser.role;
        this.id = currentUser.id;
        this.timesheetAvailable = currentUser.timesheetAvailable;
      }
    );
  };

  @action updateTimeSheet = (data) => {
    this.timesheetAvailable = data;
  };

  @action updateInfoUser = (data) => {
    this.infoUser = data;
  };

  @action setIsEditing = (isEditing) => {
    this.isEditing = isEditing;
  };
}

const userStore = new UserStore();
export default userStore;
