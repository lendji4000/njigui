module.exports = {
  apps : [{
    name: 'mairedschang',// ici le nom de votre application
    script: 'server/index.js',
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
  deploy : {
    production : {
      user : 'node',
      host : '51.83.99.84',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path: 'server/index.js',
      script: 'server.index.js',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js -env production'
    }
  }
};
