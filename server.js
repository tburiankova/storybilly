const path = require('path');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const HttpError = require('./models/httpError');

// routes
const posts = require('./routes/postsRoutes');
const users = require('./routes/usersRoutes');

const app = express();

dotenv.config({ path: './config.env' });

// body parser
app.use(express.json());

// serving file uploads
app.use(
  '/uploads/images',
  express.static(path.join(__dirname, '/uploads/images'))
);

// set headers, enable cors
// app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

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
app.use('/api/users', users);

// handling unexisting routes
// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route', 404);
//   throw error;
// });

// serving the build folder
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// error handler
app.use((err, req, res, next) => {
  // rollback file if we had a validation error
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }

  if (res.headerSent) {
    return next(err);
  }

  res
    .status(err.code || 500)
    .json({ message: err.message || 'An unknown error occurred' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
