const convict = require('convict');
const dotenv = require('dotenv');
dotenv.config();

const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    liredditDb: {
        host: {
            doc: 'The Host to bind database',
            format: 'String',
            default: '127.0.0.1',
            env: 'DBCONFIG_HOST',
          },
          port: {
            doc: 'The port to bind database',
            format: 'port',
            default: 5432,
            env: 'DBCONFIG_PORT',
          },
          user: {
            doc: 'The user to access the database',
            format: 'String',
            default: 'postgres',
            env: 'DBCONFIG_USERNAME',
          },
          password: {
            doc: 'The password to access the database',
            format: 'String',
            default: '',
            env: 'DBCONFIG_PASSWORD',
          },
          database: {
            doc: 'Database Name',
            format: 'String',
            default: 'lireddit',
            env: 'DBCONFIG_DATABASE',
          },
    }
});

config.validate({ allowed: 'strict' });
export default config;