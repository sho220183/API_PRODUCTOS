import 'dotenv/config';
import app from './app.js';
import { conectarDB } from './config/db.js';
const PORT = process.env.PORT || 3000;
async function iniciarServidor() {
    try {
        // Conectar con MongoDB
        await conectarDB();
        // Iniciar servidor Express
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}
iniciarServidor();