import app from './app.js';
import { SV_PORT } from './config.js';

app.listen(SV_PORT, ()=>{
    console.log(`listening to port ${SV_PORT}`);
});