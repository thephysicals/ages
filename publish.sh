#!/bin/bash

echo "Building..."
npm install
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res  
rm -rf ./android/app/src/main/res/drawable-*
rm -rf ./android/app/src/main/res/raw
cd android
./gradlew assembleRelease

echo "Up release"
scp /Users/eduardom.rodrigues/Projects/ages/ages/android/app/build/outputs/apk/release/app-release.apk root@104.248.253.192:/opt/httpd-data
scp /Users/eduardom.rodrigues/Projects/ages/ages/android/app/build/outputs/apk/release/app-release.apk root@159.65.111.53:/opt/httpd-data