import client from "../../Services/http";

export default class UserInfoProvider {
  static async getMe() {
    return client.get("/profile/me")
  }

  static async getUserInfo(userId) {
    return client.get(`/profile/${userId}`)
  }

  static async updateUserData(userId) {
    return client.patch(`/profile/${userId}`)
  }

  static async bookmark(postId) {
    return client.patch(`/profile/bookmark/${postId}`)
  }

  static async unBookmark(postId) {
    return client.patch(`/profile/unBookmark/${postId}`)
  }

  static async followUser(userId) {
    return client.patch(`/profile/follow/${userId}`)
  }

  static async unFollowUser(userId) {
    return client.patch(`/profile/unFollow/${userId}`)
  }
}
