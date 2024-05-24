const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // oder eine andere Portnummer deiner Wahl

// Middleware für das Parsen von JSON-Daten
app.use(bodyParser.json());

// Routen für Login und SignUp
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

// Server starten
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
