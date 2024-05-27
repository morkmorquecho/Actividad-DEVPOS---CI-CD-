// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Define el directorio de los archivos estáticos
app.use(express.static(path.join(__dirname, 'pagina web')));

// Ruta para el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pagina web', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
