import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("connect db ok 👌");
} catch (error) {
  console.log("Connect db error" + error);
}
