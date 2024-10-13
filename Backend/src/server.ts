import app from "./app"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`)
})
