import app from './app';
import '../messaging/provider/kafka/consumers';
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}/`);
});
