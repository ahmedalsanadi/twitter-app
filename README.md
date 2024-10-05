# Twitter Clone App
This is a full-featured Twitter clone app built with modern web development tools and technologies. It mimics the core features of Twitter, including user authentication, posting tweets, notifications, profiles, and more.

---
![Profile Page](https://github.com/user-attachments/assets/4964ae58-97ff-4828-a012-b468ffdf9b13)

## Features

- User authentication with **Next-Auth**
- API calls and data fetching with **SWR** and **Axios**
- State management with **Zustand**
- Responsive design using **Tailwind CSS**
- Database management with **MongoDB** and **Prisma**
- Security with **Bcrypt** for password hashing

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Frontend**: React, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB (with Prisma ORM)
- **Authentication**: Next-Auth
- **State Management**: Zustand
- **Other Libraries**: SWR, Axios, TypeScript, Bcrypt, React Icons
## Getting Started

To get a local copy of the project up and running, follow the steps below:

### Prerequisites

Ensure you have the following installed:
- **Node.js**: [Download from here](https://nodejs.org/)
- **MongoDB**: Set up your MongoDB database, either locally or using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ahmedalsanadi/twitter-app.git
   cd twitter-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL="YOUR_MONGODB_URL"
   NEXTAUTH_JWT_SECRET="YOUR_NEXT_AUTH_JWT_SECRET"
   NEXTAUTH_SECRET="YOUR_NEXT_AUTH_SECRET"
   ```

   > Note: If you're forking this repository, you should create your own MongoDB database on MongoDB Atlas and replace the `DATABASE_URL` with your own. Then, you can push the Prisma schema to your database.

4. **Push the Prisma schema to the database**:
   After setting up the environment variables, you can push the Prisma schema to your MongoDB database with the following command:
   ```bash
   npx prisma db push
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

The following environment variables need to be set for the application to run properly:

```env
DATABASE_URL="your-mongodb-database-url"
NEXTAUTH_JWT_SECRET="your-next-auth-jwt-secret"
NEXTAUTH_SECRET="your-next-auth-secret"
```

## Usage

After successfully setting up the project and running it locally, you can:
- Register as a user.
- Post tweets.
- Post Comments
- Likes A tweets
- Follow other users.
- View notifications.
- Edit your profile ( Profile Image , Cover Image , Name , Username and password)

## Deployment

To deploy this application on a platform like **Vercel**, follow these steps:

1. **Push your repository to GitHub**.

2. **Go to Vercel**, and sign in with your GitHub account.

3. **Import the project** from GitHub into Vercel.

4. **Set up the environment variables** in Vercel, just as you did in your `.env` file:
   - `DATABASE_URL`
   - `NEXTAUTH_JWT_SECRET`
   - `NEXTAUTH_SECRET`

5. **Deploy the app**.

## Screenshots

Here are some screenshots of the application:
---
![Homepage](https://github.com/user-attachments/assets/3c503010-a5ea-4f82-af0f-5ffe9ba15e6e)
![image](https://github.com/user-attachments/assets/f218d528-fff2-457c-a461-dfe433dca8c9)
![image](https://github.com/user-attachments/assets/4964ae58-97ff-4828-a012-b468ffdf9b13)

---

![image](https://github.com/user-attachments/assets/8d9ce192-3516-4a78-851a-d3660fea6cd4)

---

![image](https://github.com/user-attachments/assets/558ab31b-fe08-497d-a3f6-6c42dd629f52)

## Additional Information

### Tech Stack Details:
- **React**: For building the UI.
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For styling.
- **MongoDB**: As the database to store users, posts, and other app data.
- **Prisma**: As the ORM for database management.
- **Next-Auth**: For handling authentication.
- **SWR**: For efficient data fetching.
- **Zustand**: For state management.

### How to Fork and Contribute

1. Fork the repository.
2. Create your own MongoDB database.
3. Update the `.env` file with your own environment variables.
4. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```
5. Make your changes.
6. Submit a pull request.

### Contributions

Contributions are welcome! If you'd like to add new features or improve the code, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to contact me at:
- **Email**: ahmedalsanadi40@gmail.com
- **GitHub**: [Ahmed Al-sanadi](https://github.com/ahmedalsanadi)








