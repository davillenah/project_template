/**
 *  LINTER
 * //- https://github.com/stylelint/stylelint
 */
module.exports = ({ file, options, env }) => ({
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
                /*
                require("cssnano")({
                        preset: "default",
                }),
                */
        ],
});
