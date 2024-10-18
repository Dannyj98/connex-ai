## Connect AI Coding Test

# Create `.env` files

1. In the backend folder, create a `.env` file with the following variables:

```
PORT=3000
AUTH_SECRET=mysecrettoken
NODE_ENV=development
```

2. In the frontend folder, create a `.env` file with the following variables:

```
VITE_BACKEND_BASE_API=http://localhost:3000/api
VITE_AUTH_TOKEN=mysecrettoken
```

**It's bad practice to put variables like this into Git, but for the sake of this demo I have included them here**

# Installation

1. Enter the frontend folder and run `npm install`
2. In a seperate terminal enter the backend folder and run `npm install`
3. In the frontend folder run `npm run dev`
4. In the backend folder run `npm run dev`
