import { observable, computed, action } from "mobx";

class UserStore {
  @observable name = "Nguyen Huu Thanh";
  @observable username = "cun";
  @observable phoneNumber = "32352523535";
  @observable certification = "Personal Trainer Certified";
  @observable address = "16 Ly Thuong Kiet";
  @observable role = "pt";
  @observable userId = "sgf782f";
  @observable timesheetAvailable = [];
  @observable isEditing = false;

  @action updateProperty(type, data) {
    return (this[type] = data);
  }

  @action setIsEditing(isEditing) {
    this.isEditing = isEditing;
  }
}

const userStore = new UserStore();
export default userStore;
