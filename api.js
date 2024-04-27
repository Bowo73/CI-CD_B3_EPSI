const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock data for demonstration purposes
const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' }
    // Ajoutez d'autres devises au besoin
];

// Route pour obtenir la liste des devises
app.get('/currencies', (req, res) => {
    res.json(currencies);
});

// Route pour la conversion de devises
app.post('/convert', (req, res) => {
    const { amount, sourceCurrency, targetCurrency } = req.body;
    // Implémentez ici la logique de conversion de devises
    // Pour l'exemple, je retourne simplement un montant converti basé sur un taux fictif
    const conversionRate = 1.2; // Taux de conversion fictif
    const convertedAmount = amount * conversionRate;
    res.json({ amount: convertedAmount });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
