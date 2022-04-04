###  Node.js ToDo Service
_________________________

This is a Node js Hiring Tournament - Season 1. 

### Note
_______

- .env file is committed intentionally for this task. We should never committing any env variable

### Required Prerequisites
__________________________

-   You will need to have node installed in your machine
-   You must have git client installed in your machine.
-   You should also have any SQL/noSQL databse installd in your machine. (e.g MongoDB)
-   If you don't have any of the DB installed, then you can use SQLite too.

### Change to node version v14.15.1
___________________________________

```
nvm use
```

### Install all dependencies for this Tournamanet.
__________________________________________________


```bash
npm i
```

### Running in development mode
______________________________

```bash
npm run dev
```

### Once server is started propery, you must beable to see below information
___________________________________________________________________________

```
server is listening to http://localhost:8085
  
🚀 Connection successfull 🚀
```
  
### Note:
_________

-   Running `npm run dev` will eventually start mongoDB and all it's dependency.
-   If you encounter any error related to MongoDB, please refer the attached document below.

### If you want to execute exisitng MongoDB config (optional), run below commands
________________________________________________________________________________

### Start Mongo DB
__________________

```bash
npm run start-db
```

### Stop Mongo DB
_________________

```bash
npm run stop-db
```
### Command to run Mongo DB Shell for all your DB operation within
_________________________________________________________________

```bash
npm run mongo
```

### Easy documentation to setup MONGO DB on your machine (optional)

<https://docs.mongodb.com/manual/administration/install-community/>
