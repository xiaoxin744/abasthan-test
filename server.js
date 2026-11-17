const http = require('http');
const port = process.env.PORT || 3000;
const started = new Date().toISOString();
const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, started, now: new Date().toISOString() }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><html><head><meta charset="utf-8"><title>Abasthan Test OK</title></head>
<body style="font-family:sans-serif;text-align:center;margin-top:15vh">
<h1>Abasthan Test OK</h1>
<p>This minimal page was deployed on the Abasthan Free plan to verify it works.</p>
<p>Server started at: ${started}</p>
</body></html>`);
});
server.listen(port, () => console.log('listening on ' + port));
