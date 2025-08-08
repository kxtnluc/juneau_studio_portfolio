import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter({
      // default options, no need to specify pages/assets
      out: 'build' // optional: directory for build output, default is 'build'
    }),
    // You can remove prerender if not needed or configure as necessary
  }
};
