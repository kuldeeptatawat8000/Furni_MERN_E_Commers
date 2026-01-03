furni-mern/
│
├── client/                  # Frontend (React)
│   ├── public/
│   │   ├── index.html
│   │   └── assets/           # Images, icons
│   │
│   └── src/
│       ├── components/       # Reusable components
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── Loader.jsx
│       │   └── ProtectedRoute.jsx
|       |   |__ HomePage
                |__
                |__
│       │
│       ├── pages/            # All pages
│       │   ├── Home.jsx
│       │   ├── Shop.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Checkout.jsx
│       │   ├── Blog.jsx
│       │   ├── BlogDetail.jsx
│       │   ├── About.jsx     👈 About Us page
│       │   ├── Contact.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── OrderHistory.jsx
│       │
│       ├── admin/            # Admin panel
│       │   ├── Dashboard.jsx
│       │   ├── Products.jsx
│       │   ├── Orders.jsx
│       │   ├── Users.jsx
│       │   └── Blogs.jsx
│       │
│       ├── context/          # Global state
│       │   ├── AuthContext.jsx
│       │   └── CartContext.jsx
│       │
│       ├── services/         # API calls
│       │   ├── authService.js
│       │   ├── productService.js
│       │   ├── orderService.js
│       │   └── blogService.js
│       │
│       ├── utils/            # Helpers
│       │   ├── formatPrice.js
│       │   └── auth.js
│       │
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/                  # Backend (Node + Express)
│   ├── config/
│   │   ├── db.js             # MongoDB connection
│   │   └── razorpay.js       # Payment config
│   │
│   ├── models/              # MongoDB schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── Blog.js
│   │   └── Review.js
│   │
│   ├── controllers/         # Business logic
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   ├── blogController.js
│   │   └── paymentController.js
│   │
│   ├── routes/              # API routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── blogRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── middleware/          # Security
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── sendEmail.js
│   │
│   ├── server.js
│   └── app.js
│
├── .env
├── package.json
├── README.md
