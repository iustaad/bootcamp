/*
For custom advanced configuration of Next.js, you can create a next.config.js or next.config.mjs file in the root of your project directory (next to package.json).

next.config.js is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it's not included in the browser build.
*/
const nextConfig = {
  env: {
    MOODLE_URL: "http://localhost",
  },

  images: {
    domains: ["http://localhost"],
  },
};

module.exports = nextConfig;
