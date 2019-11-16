require('dotenv').config()
const {
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {

      resolve: 'gatsby-source-sanity',
      options: {
      projectId: 'wzscd3fa',
      dataset: 'production',
      // a token with read permissions is required
      // if you have a private dataset
      token: 'skG0vwkhIeDRO6aHunKLOXYLBN7ay5gTY6WFhSUpsiKCiVWB2aWbISruhylU255IO5xIrk3MwAhpmDl1lh9vUBX6uAB9e5J64Hv3qkUlgv4IEjtvcQzNP8v3DeEJ4MFjiMYo3DyuBKx3Zn8IZWBYwePfXe8ujv2PdzBZXMXN7YuMpfIWzOB3',

      },
    }

  ],
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig(path) {
  try {
    return require('../studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}
