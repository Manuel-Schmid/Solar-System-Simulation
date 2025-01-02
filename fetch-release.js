// Proxy script to fetch GitHub Releases files
addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const releaseFile = url.searchParams.get('file');

    if (releaseFile) {
        event.respondWith(
            fetch(`https://github.com/Manuel-Schmid/Solar-System-Simulation/releases/download/${releaseFile}`, {
                headers: { 'Origin': location.origin },
            }).then((response) => {
                if (!response.ok) {
                    return new Response('File not found.', { status: 404 });
                }
                return response;
            })
        );
    } else {
        event.respondWith(new Response('Missing file parameter.', { status: 400 }));
    }
});
