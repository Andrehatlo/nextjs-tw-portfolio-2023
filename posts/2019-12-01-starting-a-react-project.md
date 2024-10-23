---
title:  "Starting a React Native project with Expo"
metaTitle:  "Starting a React Native project with Expo"
metaDesc: "How to start using react native with Expo"
socialImage: /images/start-react.jpg
date: "2019-12-01"
tags:
    - node
    - react
    - xcode
    - expo
---

For React Native we need `node`, `Watchman`, React Native CLI and `Xcode`.

**node:**
* A javascript package manager.

**Watchman:**
* A service for watching changes in files and trigger actions when files are changed.

**React Native CLI:**
* A command line interface module for React Native.

**Xcode:**
* Apples IDE to test your application on an Iphone simulator.

## 1. Install `node` and `Watchman`

Install node and watchman using [Homebrew](https://brew.sh/index_se.html).

```
brew install node
brew install watchman
```

## 2. Install React Native CLI

Install React Native CLI with the node package manager (npm).

```
npm install -g react-native-cli
```
## 3. Install Xcode and the Xcode Command line tools.

Install [Xcode from the app store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).

In Xcode preferences, go to `locations` and download the Xcode CLI found at `Command Line Tools`.

Go to `Components` and download a simulator of your choice, preferably the newest.

## 4. Starting a React Native project

Now you can run these commands in your terminal to start of a React Native project:

```
react-native init MyApp
cd MyApp
react-native run-ios
```

This will initiate a React Native project, and showcase it in an iOS simulator that should look similar to this:

<img src="../assets/images/React-native-ios.png" alt="react-native" width="400">

## Expo

Expo is a free toolchain built around React Native like `react-native` to help build native iOS and Android projects.

The toolchain provides tools to simplify development of React Native apps by supplying components of users interface and services that are normally available in third-party native React Native components. All these you can find in Expo SDK.

Simply install the Expo CLI and run the simulator by running the following commands:

```
npm install -g expo-cli
expo init MyApp
cd MyApp
npm start
```

The last command will start Metro Bundler, which is a HTTP server that compiles the JavaScript code of our app using Babel and serves it to the Expo app.

You will also notice it pops open the Expo Dev Tools, a control panel for developing your app, in your default browser.

### Open the app on your phone or simulator

Looking at the Expo Dev Tools, you have available options on which type of simulator you would like to run (Android or iOS). And you have the option to scan the QR code to run the app on your phone in real time using Live Reload.

All you have to do is download the [Expo app](https://expo.io/tools#client) on either Android or iPhone and scan the QR code, and you are ready to go.


### React Native Documentation:

Learn more about how React Native works by looking at the [docs](https://facebook.github.io/react-native/docs/tutorial.html).
