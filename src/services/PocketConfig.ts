let PocketBase = require('pocketbase');
import 'cross-fetch/polyfill';

const pb = new PocketBase.default(process.env.VUE_APP_POCKET_API);

export default pb