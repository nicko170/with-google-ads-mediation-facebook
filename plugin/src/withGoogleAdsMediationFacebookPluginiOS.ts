import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import {mergeContents, MergeResults} from "@expo/config-plugins/build/utils/generateCode";
import fs from 'fs/promises';
import path from 'path';

const withGoogleAdsMediationFacebookPluginiOS: ConfigPlugin = config => {
    return withDangerousMod(config, [
        'ios',
        async config => {
            const filePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
            const contents = await fs.readFile(filePath, 'utf-8');
            let results: MergeResults;
            try {
                results = addGoogleMobileAdsMediationFacebookSupport(contents)
            } catch (e) {
                if (e.code == 'ERR_NO_MATCH') {
                    throw new Error(
                        `Cannot add GoogleMobileAdsMediationFacebook to the project's ios/Podfile because it's malformed. Please report this with a copy of your project Podfile.`
                    );
                }
                throw e;
            }

            if (results.didMerge) {
                await fs.writeFile(filePath, results.contents);
            }

            return config
        }
    ]);
};


const addGoogleMobileAdsMediationFacebookSupport = (src: string): MergeResults => {
    return mergeContents({
        tag: 'google-mobile-ads-mediation-facebook',
        src,
        newSrc: `  pod 'GoogleMobileAdsMediationFacebook'`,
        anchor: /use_native_modules/,
        offset: 0,
        comment: '#',
    });
}


export {addGoogleMobileAdsMediationFacebookSupport};
export default withGoogleAdsMediationFacebookPluginiOS;
