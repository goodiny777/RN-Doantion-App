const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
        resolver: {
            sourceExts: [...sourceExts, 'ts', 'tsx', 'js', 'jsx'],
        },
    };
})();
