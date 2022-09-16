# Routes Documentation

These are screenshots of the views for all of my controller routes

## Home Routes

`/ endpoint`

![workout logger home page, log in or sign up](public/assets/slash.png)

`/login endpoint`

![workout logger home page, log in or sign up](public/assets/login.png)

`/signup endpoint`

![workout logger home page, log in or sign up](public/assets/signup.png)

## User Routes

`/api/users/signup endpoint`

![workout logger home page, log in or sign up](public/assets/newUserSignUp.png)

`/api/users/login endpoint`

![workout logger home page, log in or sign up](public/assets/userLogin.png)

`/api/users/logout endpoint`

![workout logger home page, log in or sign up](public/assets/userLogout.png)

`/api/users/allUsers endpoint`

![workout logger home page, log in or sign up](public/assets/allUsers.png)

## Log Routes

`/api/logs endpoint`

- withAuth; requires a registered user to be logged in to view  
  ![workout logger home page, log in or sign up](public/assets/allLogs.png)

`/api/logs/newLog endpoint`

- POST route to create a new log
  ![workout logger home page, log in or sign up](public/assets/newLogView.png)

- GET route to render the new log form
  ![workout logger home page, log in or sign up](public/assets/newLogPost.png)

`/api/logs/:type endpoint`

- filter by workout_type
  ![workout logger home page, log in or sign up](public/assets/filterType.png)
