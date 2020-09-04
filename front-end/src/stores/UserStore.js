import { observable, computed, action } from "mobx";

class UserStore {
  @observable infoUser = {
    name: "Nguyen Huu Thanh",
    phoneNumber: "32352523535",
    certification: "Personal Trainer Certified",
    address: "16 Ly Thuong Kiet",
  };
  @observable username = "cun";
  @observable role = "pt";
  @observable userId = "sgf782f";
  @observable isEditing = false;
  @observable timesheetAvailable = [];

  @action updateTimeSheet(data) {
    this.timesheetAvailable = data;
  }

  @action updateInfoUser(data) {
    this.infoUser = data;
  }

  @action setIsEditing(isEditing) {
    this.isEditing = isEditing;
  }
}

const userStore = new UserStore();
export default userStore;
