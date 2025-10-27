# Airbnb Clone - Major Project

A full-stack web application that replicates the core functionality of Airbnb, allowing users to list properties, search for accommodations, make bookings, and leave reviews.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## ✨ Features

- **User Authentication**: Sign up, login, and logout functionality with Passport.js
- **Property Listings**: Create, read, update, and delete property listings
- **Image Upload**: Upload and manage property images using Cloudinary
- **Reviews & Ratings**: Users can leave reviews and ratings for properties
- **Interactive Maps**: Location mapping using Mapbox
- **Search & Filter**: Search properties by location and other criteria
- **Responsive Design**: Mobile-friendly user interface
- **Flash Messages**: User feedback for actions and errors
- **Session Management**: Secure session handling with MongoDB store

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware

### Frontend
- **EJS** - Templating engine
- **Bootstrap** - CSS framework
- **JavaScript** - Client-side scripting

### Services & APIs
- **Cloudinary** - Image storage and management
- **Mapbox** - Maps and location services
- **MongoDB Atlas** - Cloud database

### Additional Tools
- **Joi** - Data validation
- **Multer** - File upload handling
- **Method Override** - HTTP method override
- **Connect Flash** - Flash messages

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v20.17.0 or higher)
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrinceYadav001/My-Major-Project.git
   cd My-Major-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the required variables (see Environment Variables section)

4. **Start the application**
   ```bash
   node app.js
   ```

The application will be running on `http://localhost:8080`

## 🔧 Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
NODE_ENV=development
ATLASDB_URL=your_mongodb_atlas_connection_string
SESSION_SECRET=your_session_secret_key

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox Configuration
MAP_TOKEN=your_mapbox_access_token
```

## 💻 Usage

1. **Registration**: Create a new account on the signup page
2. **Login**: Access your account using your credentials
3. **Browse Listings**: View available properties on the home page
4. **Create Listing**: Add your own property for others to book
5. **Property Details**: View detailed information about any property
6. **Reviews**: Leave reviews and ratings for properties you've experienced
7. **Profile Management**: Manage your listings and account information

## 📁 Project Structure

```
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom middleware functions
├── schema.js            # Joi validation schemas
├── controllers/         # Route handlers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/              # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── includes/        # Partial templates
│   ├── layouts/         # Layout templates
│   ├── listings/        # Listing-related views
│   └── Users/          # User-related views
├── public/              # Static files
│   ├── CSS/            # Stylesheets
│   └── js/             # Client-side JavaScript
├── utils/               # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
└── init/                # Database initialization
    ├── data.js
    └── index.js
```

## 🔗 API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/new` - Show create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Get specific listing
- `GET /listings/:id/edit` - Show edit listing form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Create review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /signup` - Show signup form
- `POST /signup` - Register new user
- `GET /login` - Show login form
- `POST /login` - Login user
- `POST /logout` - Logout user

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Prince Yadav**
- GitHub: [@PrinceYadav001](https://github.com/PrinceYadav001)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Airbnb's user interface and functionality
- Built as a learning project to understand full-stack web development
- Thanks to the open-source community for the amazing tools and libraries

---

**Note**: This is a learning project and not intended for commercial use. Please ensure you comply with all terms of service for the external APIs used in this project.
