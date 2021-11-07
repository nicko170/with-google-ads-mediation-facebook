import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withGoogleAdsMediationFacebookPluginiOS from './withGoogleAdsMediationFacebookPluginiOS';

const withGoogleIDFASupport: ConfigPlugin = (config) => {
  return withPlugins(config, [withGoogleAdsMediationFacebookPluginiOS]);
};

export default withGoogleIDFASupport;
