var fs = require('fs');

function readWriteSync() {
  let env = process.env.ENV;
  console.log({environment: env});
  if (!process.env.ENV) {
    env = 'dev';
  }

  var data;
  if(env == 'prod')
    data = fs.readFileSync('src/environments/environment.prod.ts', 'utf-8');
  else
    data = fs.readFileSync('src/environments/environment.dev.ts', 'utf-8');

  fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
  console.log(data);
}


readWriteSync();
