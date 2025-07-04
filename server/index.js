const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data for simulation
const sampleHeadlines = [
  "Discover the Best of [Business Name] in [Location]",
  "Why [Business Name] is [Location]'s Top Choice in 2025",
  "Experience Excellence at [Business Name], [Location]",
  "Top-Rated [Business Name] Services in [Location]",
  "[Business Name]: Your Go-To Spot in [Location]"
];

// Endpoint to get business data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3 and 5
  const reviews = Math.floor(Math.random() * 300); // Random number of reviews
  const headline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)]
    .replace('[Business Name]', name)
    .replace('[Location]', location);

  res.json({ rating, reviews, headline });
});

// Endpoint to regenerate headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const headline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)]
    .replace('[Business Name]', name)
    .replace('[Location]', location);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
