(async () => {
    const headers = new Headers();
    headers.set('token', '<my-secret-identity>');

    const req = new Request('http://localhost:8000', {
        method: 'POST',
        headers,
        body: 'Hi, Server!',
    });
    const res = await fetch(req);

    if (res.ok) {
        console.log(await res.text());
    } else {
        console.error((res.statusText || 'Fetch failed') + ` (${res.status})`);
    }
})();