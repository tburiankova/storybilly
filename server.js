const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const posts = require('./routes/postRoutes');

const app = express();

dotenv.config({ path: './config.env' });

// body parser
app.use(express.json());

// mongo connect
mongoose
  .connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

// routes
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
