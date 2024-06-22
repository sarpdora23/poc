function fetchGoogle(ctx, req, res) {
    try {
        const response = fetch('https://webhook.site/0ccbcbcc-7da3-4759-9855-ac1dc992520a', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.text();
        res.status(200).send(data);  // Başarılı yanıtı gönder
    } catch (error) {
        res.status(500).send('Fetch error: ' + error.message);  // Hata durumunda yanıt gönder
    }
}

module.exports = fetchGoogle;
