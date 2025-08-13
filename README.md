**🤖 UTU Auto-Login Backend**
=============================

**Hi there!** This is the backend service that powers the [UTU Auto-Login Chrome Extension](https://www.google.com/search?q=https://github.com/Anand-kumar-dev/utu-student-portal-Auto-login-chrome-extension). It's a smart Node.js application designed to handle the heavy lifting of browser automation, making student portal logins a thing of the past.

**✨ Features**
--------------

*   **Headless Browser Automation:** Uses **Playwright** to perform login actions on the UTU student portal in a secure, server-side environment.
    
*   **CAPTCHA Solving:** Integrates with **Google Cloud Vision AI** to read and solve text-based CAPTCHAs during the login process.
    
*   **Cookie Vending Machine:** After a successful login, it extracts the necessary session cookies and sends them back to the client.
    
*   **Secure & Decoupled:** By handling automation on the backend, the frontend extension remains lightweight and secure, never exposing the core logic.
    
*   **Recursive Retry:** Includes a simple recursive function to automatically retry the login process if the first attempt fails (e.g., due to a CAPTCHA error).
    

**🛠️ Tech Stack**
------------------

This project is built with a modern and powerful set of tools:

*   **Runtime:**  **Node.js**
    
*   **Framework:**  **Express.js**
    
*   **Browser Automation:**  **Playwright-Chromium**
    
*   **AI / Machine Learning:**  **Google Cloud Vision AI**
    
*   **Environment Variables:** dotenv
    
*   **CORS Handling:** cors
    

**🔌 API Endpoint**
-------------------

The server exposes a single, powerful endpoint to handle the login process.

*   **Method:** POST
    
*   **URL:** /
    

#### **Request Body**

The endpoint expects a JSON object with the user's credentials.

{  "Enrollment": "your\_enrollment\_number",  "Password": "your\_password"}

#### **Success Response**

Upon a successful login, the server responds with a JSON array of the session cookies.

\[  {    "name": "ASP.NET\_SessionId",    "value": "...",    "domain": "app.utu.ac.in",    "path": "/",    ...  },  {    "name": "CustomAuthentication",    "value": "...",    "domain": "app.utu.ac.in",    "path": "/",    ...  }\]

**🚀 Getting Started**
----------------------

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

*   **Node.js** (v18 or higher recommended)
    
*   **npm** (comes with Node.js)
    
*   **Google Cloud Platform Account** with the Vision AI API enabled.
    

### **Installation**

1.  **Clone the repository:**git clone https://github.com/Anand-kumar-dev/auto-login-backend.git
    
2.  **Navigate to the project directory:**cd auto-login-backend
    
3.  **Install NPM packages:**npm install
    
4.  **Set up your environment variables** (see Configuration section below).
    

**⚙️ Configuration**
--------------------

This project requires a Google Cloud service account key to use the Vision AI for solving CAPTCHAs.

1.  Create a .env file in the root of the project.
    
2.  Add the following line, pointing to the path of your Google Cloud JSON key file:GCP\_CREDENTIALS="./path/to/your/key.json"
    
3.  Make sure the path is correct and that the key.json file is included in your .gitignore to prevent it from being committed to the repository.
    

**🏃 Usage**
------------

You can run the server in two modes:

*   Development Mode:Uses nodemon to automatically restart the server when you make changes.npm run start(This assumes your package.json start script uses nodemon. If not, use nodemon server.js)
    
*   Production Mode:For a production environment, it's highly recommended to use a process manager like PM2 to keep the application running forever.# 1. Install PM2 globallynpm install -g pm2# 2. Start the applicationpm2 start server.js --name "utu-autologin-api"# 3. (Optional) Make it restart on server rebootpm2 startuppm2 save
    

**📂 Project Structure**
------------------------

Here’s a high-level overview of the project's structure:

/

├── controllers/
│   └── automate.controller.js  
├── Routes/
│   └── automate.route.js      
├── .gitignore                 
├── app.js                      
├── package.json               
└── server.js                   

**Made with ❤️ by Anand Kumar**
