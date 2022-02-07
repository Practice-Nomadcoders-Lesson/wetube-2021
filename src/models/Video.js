import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  // 비디오 데이터 형식 작성
  title: String, //{type: String} 과 같은 표현
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

//Model
const Video = mongoose.model("Video", videoSchema);
export default Video;
