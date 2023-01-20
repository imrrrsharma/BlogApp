import express from 'express';
import mongoose from "mongoose";
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect
    (
        'mongodb+srv://rajatsharma9:5PGJQAPCWisfxf1g@cluster0.w8otkb4.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(()=> app.listen(5000))
    .then(() =>
        console.log("Connected database, listening on port 5000")
    )
    .catch((err) =>console.log(err));
;
// 5PGJQAPCWisfxf1g
