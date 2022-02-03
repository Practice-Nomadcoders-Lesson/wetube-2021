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
===
# Wetube Reloaded
### User
/ -> Home
/join -> Join (회원가입)
/login -> Login
/search -> Search

/users/edit -> Edit User
/users/delete -> Delete User
    
### Video
/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video

/videos/comments -> Comment on a video
/videos/comments/delete -> Delete A Comment of a Video
===
### npm install express (2.1 Installing Express)
### npm install --save-dev @babel/core (2.3 The Tower of Babel)
### npm install @babel/core @babel/node --save-dev (2.4 Nodemon)
### npm install -g @babel/node --save-dev (2.4 Nodemon)
### npm install nodemon --save-dev (2.4 Nodemon)
### npm install morgan (3.11 External Middlewares)
===
