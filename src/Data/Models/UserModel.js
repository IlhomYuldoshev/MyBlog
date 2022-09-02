export const UserModel = {
  user_name: String,
  additional_info: String,
  email: String,
  isActivated: Boolean,

  // avatarUrl

  bookmarkedPosts: ["Post"],
  followedUsers: ["User"],

  createdDate: Date,
  updatedDate: Date
}
