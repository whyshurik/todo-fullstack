const express = require('express');
const appRoutes = require('./routes/tasks.route');
const userRoutes = require('./routes/user.route')
const mongoose = require('mongoose')
const cors = require('cors');
const User = require('./models/user.model');
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Разрешенные методы
    credentials: true  // Если ты передаешь куки или авторизационные заголовки

}))

app.use(express.json());
app.use('/tasks', appRoutes);
app.use('/users', userRoutes);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err));

const seedDatabase = async () => {
    const existingUser = await User.findOne({ username: 'admin' });
    if (!existingUser) {
        await User.create({
            username: "admin",
            password: "securepassword",
            role: "admin"
        });
        console.log("Default admin user created.");
    }
};


const PORT = process.env.PORT || 3000;
app.listen(PORT, async () =>  {
    console.log(`Server running on port ${PORT}`)
    await seedDatabase();
});
