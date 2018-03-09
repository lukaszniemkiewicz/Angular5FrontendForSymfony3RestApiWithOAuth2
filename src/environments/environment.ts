// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  oAuth_url : 'http://localhost/Symfony3RestApiWithOAuth2/web/app_dev.php/oauth/v2/token',
  api_url : 'http://localhost/Symfony3RestApiWithOAuth2/web/app_dev.php/api',
  login_url: 'http://localhost:4200'
  // oAuth_url : 'http://165.227.157.239/AuditLiveApi/web/oauth/v2/token',
  // api_url : 'http://165.227.157.239/AuditLiveApi/web/api'
};
