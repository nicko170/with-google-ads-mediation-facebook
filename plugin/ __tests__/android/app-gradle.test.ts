import * as fs from 'fs/promises';
import * as path from 'path';

import * as Plugin from '../../src/withGoogleAdsMediationFacebookAppGradlePlugin';

describe('[Android] App Gradle Test', () => {
  it('adds com.google.ads.mediation:facebook to app build.gradle', async () => {
    let podfile = await fs.readFile(path.resolve(__dirname, '../fixtures/build.gradle'), {
      encoding: 'utf-8',
    });

    const buildGradleFileWithFacebookMediation = Plugin.addFacebookImplementation(podfile)

    expect(buildGradleFileWithFacebookMediation).toMatchSnapshot();
  });
});
