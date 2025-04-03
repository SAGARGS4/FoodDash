# 🍔 FoodDelivery - MERN Stack Food Delivery Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

A full-stack food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. FoodDelivery connects customers with local restaurants, allowing users to browse menus, place orders, and track deliveries in real-time.

## 🚀 Features

- **User Authentication**: Secure signup/login functionality for customers, restaurant owners, and delivery partners
- **Restaurant Dashboard**: Restaurant owners can manage their menu, track orders, and view analytics
- **Customer Interface**: Browse restaurants, search by cuisine, view menus, place orders, and track delivery
- **Payment Integration**: Seamless checkout experience with Stripe integration
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Admin Panel**: Complete restaurant and user management for administrators

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, Material-UI, Styled Components
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: Stripe API

## 📋 Prerequisites

- Node.js (v16.x or later)
- MongoDB (local or Atlas)
- npm or yarn
- Git

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/food-delivery.git
cd food-delivery
```

### 3. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Start the application

```bash
# Run backend server (from backend directory)
npm run dev

# Run frontend (from frontend directory)
npm start
```

## 📂 Project Structure

```
food-delivery/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Express middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   ├── app.js          # Express app setup
│   └── server.js       # Server entry point
├── frontend/
│   ├── public/         # Static files
│   ├── src/
│   │   ├── assets/     # Images, fonts, etc.
│   │   ├── components/ # Reusable components
│   │   ├── context/    # React context
│   │   ├── hooks/      # Custom hooks
│   │   ├── pages/      # Page components
│   │   ├── redux/      # Redux store, actions, reducers
│   │   ├── services/   # API service functions
│   │   ├── utils/      # Utility functions
│   │   ├── App.js      # Main app component
│   │   └── index.js    # React entry point
├── .gitignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get single restaurant
- `POST /api/restaurants` - Create restaurant (admin/owner)
- `PUT /api/restaurants/:id` - Update restaurant (admin/owner)
- `DELETE /api/restaurants/:id` - Delete restaurant (admin)

### Menu Items
- `GET /api/restaurants/:id/menu` - Get restaurant menu
- `POST /api/restaurants/:id/menu` - Add menu item (owner)
- `PUT /api/menu/:id` - Update menu item (owner)
- `DELETE /api/menu/:id` - Delete menu item (owner)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/user` - Get user orders
- `GET /api/orders/restaurant` - Get restaurant orders (owner)
- `PUT /api/orders/:id` - Update order status (owner/admin)

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Material-UI](https://mui.com/)
- [Redux](https://redux.js.org/)
- [Stripe](https://stripe.com/)
