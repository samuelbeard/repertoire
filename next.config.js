module.exports = {
    webpack: configuration => {
        configuration.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return configuration
    },
}
