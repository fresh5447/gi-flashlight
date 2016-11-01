var envalid = require('envalid');
var num = envalid.num;
var str = envalid.str;

module.exports = envalid.cleanEnv(process.env, {
  FB_URL: str({ desc: 'Firebase URL' }),
  FB_SERVICEACCOUNT: str({ desc: 'Firebase service account configuration in JSON format.' }),
  BONSAI_URL: str({ desc: 'Heroku Bonsai ElasticSearch addon URL' })

  /*
  // Papertrail log settings
  PAPERTRAIL_LOG_LEVEL: str({ desc: `Papertrail log level (${LOG_LEVELS})`, choices: LOG_LEVELS, devDefault: 'debug' }),
  PAPERTRAIL_HOST: str({ desc: 'Papertrail hostname' }),
  PAPERTRAIL_PORT: num({ desc: 'Papertrail port number'}),
  PAPERTRAIL_CLIENT_NAME: str({ desc: 'Papertrail client name' }),

  CONSOLE_LOG_LEVEL: str({ desc: `Console log level (${LOG_LEVELS})`, choices: LOG_LEVELS, devDefault: 'debug' }),
  */
});
