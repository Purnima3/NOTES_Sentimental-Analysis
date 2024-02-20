const express = require('express');
const bodyParser = require('body-parser');
const csvParser = require('csv-parser');
const fs = require('fs')
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());


// Route to handle incoming notes data

app.post('/api/notes', (req, res) => {
    const notes = req.body;
    // Here you can process the received notes data
    fs.writeFile('data.json', JSON.stringify(notes, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
          return;
        }
        console.log('Data written to JSON file successfully');
      });
    // You can send a response back if needed
    res.send('Notes received successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});
