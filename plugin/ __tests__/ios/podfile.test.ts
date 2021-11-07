import * as fs from 'fs/promises';
import * as path from 'path';

import * as Plugin from '../../src/withGoogleAdsMediationFacebookPluginiOS';

describe('[iOS] Podfile Test', () => {
  it('adds GoogleMobileAdsMediationFacebook to iOS Podfile', async () => {
    let podfile = await fs.readFile(path.resolve(__dirname, '../fixtures/Podfile'), {
      encoding: 'utf-8',
    });

    const podfileWithGoogleIDFASupport = Plugin.addGoogleMobileAdsMediationFacebookSupport(podfile)

    expect(podfileWithGoogleIDFASupport).toMatchSnapshot();
  });
});
