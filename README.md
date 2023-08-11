# Blog Application

The "Blog app" is a website created by Heta Trivedi where people can read blog posts and show their appreciation by clicking an upvote button. Users can also engage by leaving comments on the blog posts. The website was built using a set of technologies called MERN, which stands for MongoDB, Express, React, and Node.js. These technologies are commonly used together for creating websites that seamlessly function from the front-end to the back-end.

And the "Blog app" isn't just a concept—it's a fully functional website that you can visit [here](https://mern-395505.el.r.appspot.com/). You can explore the blog posts, upvote them, leave comments, and interact with the content.

## Features

- User registration and login system with Authentication and Authorization.
- Upvotes functionality for posts.
- Users can comment on posts.

## Tech Stack

The Blog website is built using the following technologies:

### Backend

- Node.js with Express as the server framework
- MongoDB for the database with Mongoose as the Object Data Modeling (ODM) tool
- JWT authentication (JSON Web Tokens)
- Password hashing using Firebase

### Frontend

- React with functional components and hooks
- React Router for client-side routing
- Fetch API for data retrieval and manipulation

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/trivedi01/Project.git



2. **Install Dependencies for Both the Client and Server:**

   ```bash
   cd PROJECT/frontend/frontend
   npm install

   cd ../backend
   npm install

3. **Configuration: Environment Variables**

* Navigate to the `backend` directory of your project.

* Create a file named `.env` in the `backend` directory.

* Inside the `.env` file, set up the environment variables for the backend. For example:

   ```env
   MONGO_USERNAME=your-mongo-db-username
   MONGO_PASSWORD=your-mongodb-password

## Running the Application

1. **In the Frontend Directory:**

   Navigate to the `frontend` directory of your project.

   Run the following command to start the frontend application:

   ```bash
   npm start

2. **In the Backend Directory:**

   Navigate to the `backend` directory of your project.

   Run the following command to start the frontend application:

   ```bash
   npm run dev
   

## Accessing the Application

1. **Open your Web Browser:**

   Launch your preferred web browser.

2. **Access the Application:**

   In the address bar of your web browser, enter the following URL :  http://localhost:3000

## Deployment

We have successfully deployed our project using the Google Cloud Platform (GCP). https://mern-395505.el.r.appspot.com/
The deployment process was carried out with the following steps:

1. **App Configuration:**

   We created an `app.yaml` configuration file to specify the settings and requirements for deploying our application on GCP.

2. **Deployment Command:**

   Using the Google Cloud SDK, we executed the deployment command to launch our full-stack project on the cloud:

   ```bash
   gcloud app deploy


## Contributing

We welcome contributions to Blog App! Whether you've discovered a bug, have suggestions for improvements, or want to introduce new features, your involvement is appreciated. Here's how you can contribute:

1. **Issue Reporting:**

   If you encounter any bugs, inconsistencies, or have ideas for enhancements, please open an issue in our repository. Provide as much detail as possible to help us understand and address the problem.

2. **Pull Requests:**

   If you'd like to contribute code changes, follow these steps:

   - Fork the repository to your own GitHub account.
   - Create a new branch from the `main` branch for your changes.
   - Make your proposed changes in your branch.
   - Ensure your code follows our coding standards.
   - Submit a pull request from your branch to our `main` branch.

   Your pull request will be reviewed by our team, and we appreciate your effort to enhance the project.

3. **Feature Requests:**

   If you have ideas for new features or improvements, please open an issue to discuss your proposal. We value your input and will collaborate on how to best integrate your ideas.

4. **Documentation:**

   Contributions to documentation, including clarifications, examples, and guides, are highly valuable. Feel free to submit documentation changes through pull requests.

Your contributions play a vital role in making UniVerse a better platform. Thank you for your involvement!




