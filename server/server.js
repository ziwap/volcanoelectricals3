const https = require('https');

const options = {
  hostname: 'volcanocalls.blinqwines.com',
  port: 443,
  path: '/products',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();