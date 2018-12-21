module.exports = {
    parser: 'postcss',
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-conditionals': {},
        'postcss-simple-vars': {},
        'postcss-preset-env': {
            stage: 3,
            features: {
              'nesting-rules': true
            }
        },
        'cssnano': {}
    }
}