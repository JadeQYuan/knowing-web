const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.module
            .rule("svg")
            .exclude.add(resolve("src/assets/icons"))
            .end();
        config.module
            .rule("svg-icon")
            .test(/\.svg$/)
            .use("svg-sprite")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            })
            .end()
            .include.add(resolve("src/assets/icons"))
            .end();
    }
};
