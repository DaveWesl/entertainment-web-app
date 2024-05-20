const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Importiere das CORS-Modul

const app = express();
const port = 3001;

// Middleware für das Parsen von JSON-Daten
app.use(bodyParser.json());

// CORS Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Erlaube nur Anfragen von diesem Ursprung
  optionsSuccessStatus: 200 // Stelle sicher, dass CORS-Anfragen einen Statuscode 200 zurückgeben
}));

// Pfad zur data.json-Datei
const dataFilePath = path.join(__dirname, 'data.json');

// Routen für Login, SignUp und Gast-Login
app.post('/api/login', (req, res) => {
  // Hier kannst du die Logik für die Überprüfung der Login-Daten implementieren
  const { email, password } = req.body;
  // Beispiel: Überprüfung der Login-Daten
  if (email === 'test@example.com' && password === 'pass123') {
    res.json({ success: true, message: 'Login erfolgreich!' });
  } else {
    res.status(401).json({ success: false, message: 'Ungültige Anmeldeinformationen!' });
  }
});

app.post('/api/signup', (req, res) => {
  // Hier kannst du die Logik für die Registrierung implementieren
  const { email, password } = req.body;
  // Beispiel: Speichern der Registrierungsdaten
  res.json({ success: true, message: 'Registrierung erfolgreich!' });
});

app.post('/api/guest-login', (req, res) => {
  // Hier kannst du die Logik für den Gast-Login implementieren
  // Zum Beispiel die data.json für den Gast laden und senden
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Data from file:', data); // Überprüfe den Inhalt der Datei
    res.json({ success: true, data: JSON.parse(data) });
  });
  
});

// Server starten
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
