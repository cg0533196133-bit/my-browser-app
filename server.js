const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <html>
      <head><title>Tic Tac Toe Test</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>בדיקת מערכת - איקס עיגול</h1>
        <p>אם אתה רואה את המסך הזה, סימן שהשרת ב-Fly.io רץ בהצלחה מלאה!</p>
        <div style="font-size: 24px; margin: 20px;">❌ ⭕ ❌</div>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
