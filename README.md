# MERN Docker Compose Demo

I followed [this tutorial](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66) to get basic app working.

I then containerized the api server and react client and created docker-compose to connect them.

---
## MATCH NPM VERSION
Install nvm in your machine. Instructions:    
https://github.com/nvm-sh/nvm#nvmrc   

Run this command in the root app    
`nvm use`   

If you work with multiple tabs in terminal, It is recomended to change the default nvm    
`nvm alias default 14.15.0`

## INSTALL CLIENT AND SERVER
`cd client && npm i`    
`cd server && npm i`
## Lift up services in development   
-d option is for execute process in background (detached mode)   
`docker-compose up -d`  

---

**NOTE:** This is a development configuration where the react app is being served by a separate container. We would also want to create a production version where we build a static version of the react site and serve it with something like nginx.
