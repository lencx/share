const { spawnSync, execSync } = require('child_process');

spawnSync('ls', { stdio: 'inherit' });
spawnSync('ls', { stdio: 'inherit' });
execSync('ls', { stdio: 'inherit' });