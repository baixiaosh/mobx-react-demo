
import { observable, action } from "mobx"


class app {
  @observable global

  constructor() {
    this.global = {}
  }

  @action
  setGlobal(data) {
    this.global = data
  }

}

export default new app()