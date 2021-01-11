// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // APIURL    : 'http://y-code/api/v1',
  // APPURL    : 'http://y-code/',
  APIURL    : 'https://y-code.lopezsoft.net.co/api/v1',
  APPURL    : 'https://y-code.lopezsoft.net.co',
  APIJWT    : 'y-code-jwt'
};
