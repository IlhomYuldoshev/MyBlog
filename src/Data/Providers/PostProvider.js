import client from "../../Services/http";

export default class PostProvider {
  static async getAll () {
    return client.get("/posts");
  }

  static async getOne (postId) {
    return client.get(`/posts/${postId}`);
  }

  static async createPost (postFormData) {
    return client.post("/posts", postFormData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  }

  static async updatePost (postId, body) {
    return client.patch(`/posts/${postId}`, body);
  }

  static async deletePost (postId) {
    return client.delete(`/posts/${postId}`);
  }
}
