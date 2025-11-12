import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// thư mục chứa ảnh
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// cấu hình multer để lưu ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// upload ảnh
app.post("/upload", upload.array("images"), (req, res) => {
  const urls = req.files.map((f) => "/uploads/" + f.filename);
  res.json({ success: true, urls });
});

// trả danh sách ảnh
app.get("/images", (req, res) => {
  const files = fs.readdirSync(uploadDir).map((f) => "/uploads/" + f);
  res.json(files);
});

app.listen(PORT, () =>
  console.log(`✅ Server chạy tại: http://localhost:${PORT}`)
);
