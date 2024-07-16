import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
// app.use(express.static(join(__dirname, './dist')));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);




// // Serve static files from frontend1

// // Serve static files from frontend2
app.use('/admin', express.static(join(__dirname, './admin')));

// Route to serve the frontend1 index.html for any other routes under /frontend1
app.get('/admin', (req, res) => {
    res.sendFile( __dirname+'/admin/index.html');
  });
  app.use(express.static(join(__dirname, './dist')));

// Route to serve the frontend2 index.html for any other routes under /frontend2
// app.get('/frontend2/*', (req, res) => {
//   res.sendFile(join(__dirname, './dist/index.html'));
// });

// app.get('/', (req, res) => {
//   res.sendFile(join( __dirname+'/dist/index.html'));
// });

// app.use("/admin", express.static(join(__dirname, './dist')))
app.use("/",(req,res)=>{
  res.status(200).send('Backend Running');
})

dbConnection();

app.use(errorMiddleware);
export default app;
