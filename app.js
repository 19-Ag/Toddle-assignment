require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/db');
const errorHandler = require('./middleware/error.middleware');

app.use(express.json());
app.use('/uploads', express.static('uploads'));
// app.get('/', (req, res) => {
//   res.send('Welcome to the Journal App Backend!');
// });
// Routes
app.use('/auth', require('./routes/auth.routes'));
app.use('/journals', require('./routes/journal.routes'));
app.use('/notifications', require('./routes/notification.routes'));
app.get('/', (req, res) => {
  res.send("<h1>JOURNAL APP IS RUNNING ...IMPORT POSTMAN COLLECTION TO CHECK API ON POSTMAN!! </h1>")});
// Error handler (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});

