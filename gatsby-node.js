// https://www.gatsbyjs.org/docs/node-apis/

exports.onCreateWebpackConfig = ({actions, getConfig}) => {
  const config = getConfig()
  // Make 'src' as a root folder for imports
  config.resolve.modules = ['src', 'node_modules']

  actions.replaceWebpackConfig(config)
}
