// production      : $ npx webpack -p
// development  : $ npx webpack -d
// $ npx webpack-dev-server
// npx stylelint "**/*.css"

module.exports = {
    /**
     * ENTRY
     */
    entry: {
        master: "./src/js/master.js",
    },
    /**
     * OUTPUT
     */
    output: {
        path: __dirname + "/build",
        filename: "[name].bundle.js",
    },
    /**
     * DEVELOPMENT SERVER
     */
    devServer: {
        port: 5000,
    },
    /**
     * MODULES - LOADERS
     */
    module: {
        rules: [
            // - HTML
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "file-loader?name=[name].[ext]",
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader",
                    },
                ],
            },
            // - PRE-CSS > SASS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "file-loader?name=[name].css",
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                //path: __dirname + "/config",
                            },
                            ident: "postcss",
                            plugins: [
                                //- https://www.npmjs.com/package/postcss-merge-idents
                                require("postcss-merge-idents"),
                                //- https://www.npmjs.com/package/postcss-discard-unused
                                require("postcss-discard-unused"),
                                //- https://www.npmjs.com/package/postcss-reduce-idents
                                require("postcss-reduce-idents"),
                                //- https://github.com/jonathantneal/mdcss
                                require("mdcss"),
                                //- https://www.npmjs.com/package/autoprefixer
                                require("autoprefixer"),
                                //- https://www.npmjs.com/package/cssnano
                                require("cssnano")({
                                    preset: "default",
                                }),
                            ],
                        },
                    },
                    {
                        loader: "sass-loader",
                        /*
                                                options: {
                                                        // Prefer `dart-sass`
                                                        implementation: require("sass"),
                                                        sourceMap: false,
                                                },
                                                */
                    },
                ],
            },
            // - JAVASCRIPT
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
    },
    /**
     * PLUGINS
     */
    plugins: [],
};
