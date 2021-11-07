import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withGoogleAdsMediationFacebookPluginiOS from './withGoogleAdsMediationFacebookPluginiOS';
import withGoogleAdsMediationFacebookAppGradlePlugin from "./withGoogleAdsMediationFacebookAppGradlePlugin";

const withGoogleIDFASupport: ConfigPlugin = (config) => {
  return withPlugins(config, [withGoogleAdsMediationFacebookPluginiOS, withGoogleAdsMediationFacebookAppGradlePlugin]);
};

export default withGoogleIDFASupport;
