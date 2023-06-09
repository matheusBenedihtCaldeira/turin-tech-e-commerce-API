//Imports necessary for application
import app from './app';

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
