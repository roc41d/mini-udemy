const { writeFile } = require('fs');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const writeFilePromisified = promisify(writeFile);

const targetPath = './src/environments/environment.development.ts';

const envConfigFile = `export const environment = {
  production: false,
  firebaseConfig: {
    projectId: '${process.env['PROJECT_ID']}',
    appId: '${process.env['APP_ID']}',
    storageBucket: '${process.env['STOREAGE_BUCKET']}',
    apiKey: '${process.env['API_KEY']}',
    authDomain: '${process.env['AUTH_DOMAIN']}',
    messagingSenderId: '${process.env['MESSAGING_SENDER_ID']}',
  },
  filestackApiKey: '${process.env['FILESTACK_API_KEY']}',
  filestackPolicy: '${process.env['FILESTACK_POLICY']}',
  filestackSignature: '${process.env['FILESTACK_SIGNATURE']}',
};
`;

(async () => {
  try {
    await writeFilePromisified(targetPath, envConfigFile);
  } catch (err) {
    console.error(err);
    throw err;
  }
})();