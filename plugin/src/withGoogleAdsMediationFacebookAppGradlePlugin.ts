import {ConfigPlugin, WarningAggregator, withAppBuildGradle} from '@expo/config-plugins';

const withGoogleAdsMediationFacebookAppGradlePlugin: ConfigPlugin = config => {
    return withAppBuildGradle(config, ({modResults, ...config}) => {
        if (modResults.language !== 'groovy') {
            WarningAggregator.addWarningAndroid(
                'withGoogleMobileAdsMediationFacebook',
                `Cannot automatically configure app build.gradle if it's not groovy`,
            );
            return {modResults, ...config};
        }

        modResults.contents = addFacebookImplementation(modResults.contents);
        return {modResults, ...config};
    });
};

const addFacebookImplementation = (projectBuildGradle: string) => {
    if (projectBuildGradle.includes('com.google.ads.mediation:facebook')) return projectBuildGradle;

    return projectBuildGradle.replace(
        /dependencies\s?{/,
        `dependencies {
        implementation 'com.google.ads.mediation:facebook:6.8.0.0'
    `,
    );
};

export {addFacebookImplementation};
export default withGoogleAdsMediationFacebookAppGradlePlugin;