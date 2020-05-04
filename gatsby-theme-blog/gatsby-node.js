const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const withDefaults = require(`./default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();

  const { postsPath } = withDefaults(themeOptions);

  const dirs = [path.join(program.directory, postsPath)];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`);
      mkdirp.sync(dir);
    }
  });
};
