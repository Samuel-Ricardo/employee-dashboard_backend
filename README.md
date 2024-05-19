# Employee Dashboard [ BACKEND ]

![image](https://github.com/Samuel-Ricardo/employee-dashboard_backend/assets/63983021/a318896c-6645-424d-8ef6-06fac133a79d)

<h4 align="center" >🚀 🟥 Emlpoyee Dashboard 🟥 🚀</h4>

<h4 align="center">
  Application developed for explore my dev skills
</h4>

#

<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#app">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<h1 align="center">
  
  <a href="https://github.com/Samuel-Ricardo">
    <img src="https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB"/>
  </a>

  <a herf="https://www.instagram.com/samuel_ricardo.ex/">
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'/> 
  </a>

  <a herf='https://www.linkedin.com/in/samuel-ricardo/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'/> 
  </a>

</h1>

<br>

<p id="project"/>

<br>

<h2>  | :artificial_satellite: About:  </h2>

<p align="justify">
  This is a full stack dashboard that allows you to view all employees of a company, being able to delete them, edit them or register a new employee using the best programming practices and clean code such as Clean Architecture, Hexagonal Architecture.
</p>

<br>

🔭 | WEBSITE Repository: [[Dashboard-FRONTEND](https://github.com/Samuel-Ricardo/employee_dashboard_frontend)] <br>
📡 | Hosted on Render: [https://employee-dashboard-backend-main.onrender.com](https://employee-dashboard-backend-main.onrender.com)

<br>

#

<br>

<h2 id="techs">
  :building_construction: | Technologies and Concepts Studied:
</h2>

> <a href='https://nextjs.org/'> <img width="128px" src="https://github.com/Samuel-Ricardo/employee-dashboard_backend/assets/63983021/b348b789-d980-4968-ac4d-749cb397f0b8" /> </a>

- NodeJS
- ExpressJS
- Typescript
- Mongoose
- Jest
- MongoDB
- Docker
- Inversify
- Zod
- Validations
- Swagger
- cors
- eslint
- Prettier
- husky
- lint-staged
- Clean Architeture
- Scalability

> Among Others...

#

<br>

<h2 id="app">
  💻 | Application:
</h2>

<h3>
  📜 | Docs:
</h3>

![image](https://github.com/Samuel-Ricardo/employee-dashboard_backend/assets/63983021/9fcb1ece-4566-40d8-a5e4-469f4a239363)

<h3>
  💾 | Database: [MongoDB | Atlas]
</h3>

![image](https://github.com/Samuel-Ricardo/employee-dashboard_backend/assets/63983021/983dee02-d182-4dc7-9de0-fd25e62f2251)


### Dashboard

![image](https://github.com/Samuel-Ricardo/employee_dashboard_frontend/assets/63983021/a8f133fb-877f-4e03-845f-9fc98a8910b7)

<br>

### Create Employee

![image](https://github.com/Samuel-Ricardo/employee_dashboard_frontend/assets/63983021/f0404bfb-f5f4-44af-902f-551a14fc3206)

<br>

### Edit Employee

![image](https://github.com/Samuel-Ricardo/employee_dashboard_frontend/assets/63983021/be91411f-36b3-4728-a4c6-2b71c128f144)

<br>

<h3>
  🏎️ | Performance:
</h3>

![image](https://github.com/Samuel-Ricardo/employee_dashboard_frontend/assets/63983021/c8ef9811-8e87-4bb5-9483-89f4b922b394)

<br>

<br>

🔭 | WEBSITE Repository: [[Dashboard-FRONTEND](https://github.com/Samuel-Ricardo/employee_dashboard_frontend)] <br>
📡 | Hosted on Render: [https://employee-dashboard-backend-main.onrender.com](https://employee-dashboard-backend-main.onrender.com)

<br>
<br>

<h2 id="run-project"> 
   👨‍💻 | How to use
</h2>

<br>

### Open your Git Terminal and clone this repository

```git
  $ git clone "git@github.com:Samuel-Ricardo/employee-dashboard_backend.git"
```

### Make Pull

```git
  $ git pull "git@github.com:Samuel-Ricardo/employee-dashboard_backend.git"
```

<br>

This application use `Docker` so you dont need to install and cofigurate anything other than docker on your machine.

> <a target="_blank" href="https://www.docker.com/"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" /> </a>

<br>

Navigate to project folder `$ cd ./api/` 

<br>

Create a `.env` file with this variables:

```env

DATABASE_URL=mongodb://root:root@mongo:27017

```

<br>

Now run it using `docker-compose`


```bash

  # After setup docker environment just run this commmand on root project folder:

  $ docker-compose up --build   # For First Time run this command

  $ docker-compose up           # to run project


```

```bash

  #Apps Running on:

  $ API: http://localhost:3000

  $ MONGO: http://localhost:27017 | [DATABASE]

  See more: ./api/docker-compose.yaml

```

<br>

You also can use the Docker Image:

```

docker pull ghcr.io/samuel-ricardo/employee-dashboard_backend:main

FROM ghcr.io/samuel-ricardo/employee-dashboard_backend:main

```

#

<br>

<h2 id="author">
  :octocat: | Author:  
</h2>

> <a target="_blank" href="https://www.linkedin.com/in/samuel-ricardo/"> <img width="350px" src="https://github.com/Samuel-Ricardo/bolao-da-copa/blob/main/readme_files/IMG_20220904_220148_188.jpg?raw=true"/> <br> <p> <b> - Samuel Ricardo</b> </p></a>

<h1>
  <a herf='https://github.com/Samuel-Ricardo'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB'> 
  </a>
  
  <a herf='https://www.instagram.com/samuel_ricardo.ex/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'> 
  </a>
  
  <a herf='https://twitter.com/SamuelR84144340'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=twitter'> 
  </a>
  
   <a herf='https://www.linkedin.com/in/samuel-ricardo/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'> 
  </a>
</h1>
