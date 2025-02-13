import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get correct directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend/ instead of src/
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// console.log("DEBUG MONGODB_URL:", process.env.MONGODB_URL);
// console.log("DEBUG PORT:", process.env.PORT);

import express from "express";
import cors from "cors";
import employeeRouter from "./routes/user.route.js";
import UserRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import "./database/dbconfig.js";
import session from "express-session";
import passport from "./config/passportConfig.js";
import cookieParser from "cookie-parser";
import companyRouter from "./routes/comp.route.js";
import contentRouter from "./routes/content.route.js";
import notificationRouter from "./routes/notify.route.js";
import performanceRouter from "./routes/perfomance.route.js";
import taskRouter from "./routes/task.route.js";
import userNotifyRouter from "./routes/userNotify.route.js";
import empRouter from "./routes/employee.route.js";

const app = express();

app.use(cors());

app.use(cookieParser(process.env.SESSION_SECRET || 'default_cookie_secret'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_cookie_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    },
  })
);

app.use(passport.initialize());

app.use("/api/v1", employeeRouter);
app.use("/api/v1", authRoutes);
app.use("/api/v1", notificationRouter);
app.use("/api/v1", performanceRouter);
app.use("/api/v1", UserRouter);
app.use("/api/v1", companyRouter);
app.use("/api/v1", contentRouter);
app.use("/api/v1", userNotifyRouter);
app.use("/api/v1", taskRouter);
app.use("/api/v1",empRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
