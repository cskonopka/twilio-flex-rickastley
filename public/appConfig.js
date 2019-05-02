// your account sid
var accountSid = 'ACCOUNT_SID';

// set to /plugins.json for local dev
// set to /plugins.local.build.json for testing your build
// set to "" for the default live plugin loader
var pluginServiceUrl = '/plugins.json';

var appConfig = {
  pluginService: {
    enabled: true,
    url: pluginServiceUrl,
  },
  sso: {
    accountSid: accountSid
  },
  ytica: false,
  logLevel: 'debug',
  showSupervisorDesktopView: true,
};
