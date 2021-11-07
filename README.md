# Expo - `with-google-ads-mediation-facebook`

An [Expo Config Plugin](https://docs.expo.io/guides/config-plugins) to add the GoogleMobileAdsMediationFacebook pod to your ios Podfile without ejecting or touching native code.

This lets you use Facebook Audience Network with Google AdMob mediation.

You can learn more about it here:
- [Google / Facebook Mediation Documentation - iOS](https://developers.google.com/admob/ios/mediation/facebook)
- [Google / Facebook Mediation Documentation - Android](https://developers.google.com/admob/android/mediation/facebook)
- [Config Plugins - Expo docs](https://docs.expo.io/guides/config-plugins)
- Expo Managed Workflow in 2021: [part 1](https://blog.expo.io/expo-managed-workflow-in-2021-5b887bbf7dbb), [part 2](https://blog.expo.io/expo-managed-workflow-in-2021-d1c9b68aa10)


## Installation

#### Prerequisites:

- App project using Expo SDK 41+.
- Installed `expo-cli@4.4.4` or later.

#### With `expo install`

```
expo install with-google-ads-mediation-facebook
```

#### Without `expo install`

```sh
# using yarn
yarn add with-google-ads-mediation-facebook

# using npm
npm install with-google-ads-mediation-facebook
```

Open your `app.json` or `app.config.js` and update your `plugins` section (`expo install` would do it for you):

```json
{
  "plugins": ["with-google-ads-mediation-facebook"]
}
```


## Building and running

You can either:

- Use `expo prebuild` and `expo run:android`/`expo run:ios` to update your native projects,
- Use _[EAS Build](https://docs.expo.io/build/introduction/)_ to build your development client and release versions.

## Credits

- Expo

## License

GNU GPL v3
