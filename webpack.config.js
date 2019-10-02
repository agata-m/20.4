<<<<<<< HEAD
const path = require('path');

module.exports = (env) => {
	const environment = env || 'production';

	return{
		mode: environment,
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						plugins: env !== 'production' ? ['react-hot-loader/babel'] : []
					}
				},
				{
					test:/\.css$/,
					use: [
						{loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		}
	}
=======
const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },

    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }
        
    ]
>>>>>>> ce70a97b9b2df8eb213c9ad6a8d7bc95b90ee901
};