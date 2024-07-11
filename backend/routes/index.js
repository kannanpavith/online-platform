const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
const authenticateToken = require('./middleware/auth');

// Import models
const User = require('./models/user');
const Course = require('./models/course');
const Enrollment = require('./models/enrollment');

// Sync models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
const authenticateToken = require('./middleware/auth');

// Import models
const User = require('./models/user');
const Course = require('./models/course');
const Enrollment = require('./models/enrollment');

// Sync models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});



const express = require('express');
const sequelize = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
const authenticateToken = require('./middleware/auth');

// Import models
const User = require('./models/user');
const Course = require('./models/course');
const Enrollment = require('./models/enrollment');

// Sync models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});



app.use(express.json());
const userRouter = require('./routes/users');
const courseRouter = require = require('./routes/courses');
const enrollmentsRouter = require('./routes/enrollments');
app.use('/users',usersRouter);
app.use('/courses', authenticateToken, coursesRoutes);
app.use('/enrollments', authenticateToken, enrollmentsRouter);
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
