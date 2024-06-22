export async function fetchGoogle() {
    try {
        const response = await fetch('https://webhook.site/0ccbcbcc-7da3-4759-9855-ac1dc992520a', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}
