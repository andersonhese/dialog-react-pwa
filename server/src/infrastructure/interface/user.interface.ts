export interface User {
  _id: String,
  index: Number,
  picture: String,
  age: Number,
  eyeColor: String,
  name: String,
  company: String,
  email: String,
  phone: String,
  friends: User[],
  greeting: String
}
