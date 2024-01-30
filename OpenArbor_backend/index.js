import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
//import userRoute from './routes/users.js';
const app = express();
const port = 5000;
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.get('/', (req,res) => {
    res.send('Server is running.');
});

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
//app.use('/api/users', userRoute);


// Listen to port
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));

