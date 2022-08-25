import client from "../../Services/http";

export default class AuthProvider {
  static async login(email, password) {
    console.log(email, password)
    return client.post("/login", {email, password})
  }

  static async registration(email, password) {
    return client.post("/registration", {email, password})
  }

  static async logout() {
    return client.post("/logout")
  }
}
