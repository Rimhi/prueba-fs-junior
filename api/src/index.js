const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const sequelize = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());
// Routes
app.use('/api', routes);

// Initialize database and start server
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();