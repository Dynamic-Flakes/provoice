import connect from './connect';

export const close = knex => knex.destroy();

export default config => require('knex')(connect(config));