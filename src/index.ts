import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json()); // ! INI SELALU HARUS ADA DIATAS :)

routes(app);

app.listen(8000, () => {
    console.log("Server berhasil jalan");
});