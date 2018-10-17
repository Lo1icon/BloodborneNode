module.exports = {
  apps: [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: '58.87.119.77',
      ref: 'origin/localhost',
      repo: 'git@github.com:LynnScarlett/BloodborneNode.git',
      path: '/project/pmtest/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev: {
      user: 'ubuntu',
      host: '58.87.119.77',
      ref: 'origin/localhost',
      repo: 'git@github.com:LynnScarlett/BloodborneNode.git',
      path: '~/project/pmtest/dev',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
};