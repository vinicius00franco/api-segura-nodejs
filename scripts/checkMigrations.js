const { exec } = require('child_process');

exec('npx sequelize-cli db:migrate:status', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing migration status: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  if (stdout.includes('down')) {
    console.log('There are pending migrations.');
  } else {
    console.log('No pending migrations.');
  }
});
