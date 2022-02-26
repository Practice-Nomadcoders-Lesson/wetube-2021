# wetube-2021
### Wetube Clone built using NodeJS, Express, Mongo and ES6 ❤
 
## #2.1 Installing Express
npm install express

## #2.3 The Tower of Babel
npm install --save-dev @babel/core
- https://babeljs.io/setup#installation

## #2.4 Nodemon
npm install @babel/core @babel/node --save-dev
- https://babeljs.io/setup#installation
윈도우에서 babel-node src/index.js가 배치파일이 아니라고 하면 바벨노드를 전역으로 설치해서 시스템변수에 추가되도록 한다.
npm install -g @babel/node --save-dev
전역으로 설치하기 싫다면 npx를 붙여서 "dev": "nodemon --exec npx babel-node src/index.js" 로 사용한다.

## #4.0 What are Routers?
### 💥Wetube Reloaded💥
### Global Router
/ -> Home   
/join -> Join (회원가입)   
/login -> Login   
/search -> Search

### User Router
/users/:id -> See User   
/users/logout -> Log Out   
/users/edit -> Edit My Profile     
/users/delete -> Delete User
    
### Video Router
/videos/:id -> See Video   
/videos/:id/edit -> Edit Video   
/videos/:id/delete -> Delete Video   
/videos/upload -> Upload Video   



---
### npm install express (2.1 Installing Express)
### npm install --save-dev @babel/core (2.3 The Tower of Babel)
### npm install @babel/core @babel/node --save-dev (2.4 Nodemon)
### npm install -g @babel/node --save-dev (2.4 Nodemon)
### npm install nodemon --save-dev (2.4 Nodemon)
### npm install morgan (3.11 External Middlewares)
### npm install pug (5.1 Configuring Pug)
### npm install mongoose (6.8 Connecting to Mongo)
### npm install bcrypt (7.2 Creating Account)
### npm install express-session (7.7 Sesssion and Cookies)
### npm install connect-mongo (7.12 MongoStore)
### npm install dotenv (7.15 Environment Variables)
### ~~npm install node-fetch@2.6.1 (7.19 Github Login part Four)~~
### npm install cross-fetch (7.19 Github Login part Four comment)
### npm install multer (8.6 File Uploads part One)
### npm install webpack webpack-cli -D (9.1 Webpack Configuration part One)
### npm install -D babel-loader (9.2 Webpack Configuration part Two)
### npm install sass-loader sass webpack --save-dev (9.4 SCSS Loader)
### npm install --save-dev css-loader (9.4 SCSS Loader)
### npm install --save-dev style-loader (9.4 SCSS Loader)
### npm install --save-dev mini-css-extract-plugin (9.5 MiniCssExtractPlugin)
### npm install regenerator-runtime (13.0 Recorder Setup)
### npm install @ffmpeg/ffmpeg @ffmpeg/core (14.0 Introduction)
### npm install express-flash (15.0 Installation)
### npm install --save-dev @babel/core @babel/cli (17.0 Building the Backend)
---

