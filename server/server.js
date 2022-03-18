const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const productRouter = require('./routers/product');
const typeProductRouter = require('./routers/typeProduct');
const orderRoutes = require('./routers/orderRoutes');
const revenueRoutes = require('./routers/revenueRouter');
// const fileUpload = require("express-fileupload");
const app = express();

app.use('/profile', productRouter);

connectDB();
app.use(cors());
app.use(express.json());
// app.use(fileUpload());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(fileupload());
app.use('/uploads', express.static('uploads'));

app.use('/api/product/', productRouter);
app.use('/api/typeproduct/', typeProductRouter);
app.use('/api/orders', orderRoutes);
app.use('/revenue', revenueRoutes);
// app.get("/", (req, res) => res.send("Hello all!"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
