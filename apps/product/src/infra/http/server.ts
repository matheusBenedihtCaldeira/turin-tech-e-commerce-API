//Imports necessary for application
import  express, { Router } from "express";
import { router } from "./routes";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
