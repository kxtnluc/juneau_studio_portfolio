import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // << add this line
      precompress: false
    }),
    prerender: {
      entries: [] // or leave this out entirely if you're using fallback
    }
  }
};

