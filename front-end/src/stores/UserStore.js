import { observable, computed, action } from "mobx";

export default class UserStore {
  @observable name = "Nguyen Huu Thanh";
  @observable username = "cun";
  @observable phoneNumber = "32352523535";
  @observable certification = "Personal Trainer Certified";
  @observable address = "16 Ly Thuong Kiet";
  @observable role = "pt";
  @observable userId = "sgf782f";
  @observable timesheetAvailable = [];

  @action updateProperty(type, data) {
    return (this[type] = data);
  }

  // @action addTodo(type) {
  //   remove this[type];
  // }
}
