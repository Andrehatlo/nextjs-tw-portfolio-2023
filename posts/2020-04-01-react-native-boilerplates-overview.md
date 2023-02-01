---
title: "React Native: Boilerplates overview"
metaTitle: "React Native: Boilerplates overview"
metaDesc: "It can take a few weeks (if not months) getting started with React Native, can boilerplates give a jump start to mobile development? And if so, which are the best?"
socialImage: "/images/react-boiler.jpg"
date: "2020-04-01"
tags:
    - React Native
    - Boilerplates
---

It can take a few weeks (if not months) getting started with React Native, can boilerplates give a jump start to mobile development? And if so, which are the best?

There are three boilerplates worth considering:

- [Ignitee](https://github.com/infinitered/ignite) - 9,375 stars
- [Pepperoni App Kit](https://github.com/futurice/pepperoni-app-kit) - 4,453 stars
- [Snowflake](https://github.com/bartonhammond/snowflake) - 4,399 stars

We will be taking a closer look at the most popular of them all, the `ignite` boilerplate.

## Ignitee CLI

Ignite is now the 'hottest' CLI for React Native.

It includes boilerplates, plugins, generators and more.

Ignite requires a Node version of 7.6+ minimum, check your version by running:

```
node -v
```

Install [`Yarn`](https://yarnpkg.com/lang/en/docs/install/) for your system.

Then run the following commands to add the `ignite-cli` and to create your `ignite` boilerplate.

```javascript
$ yarn global add ignite-cli
```

#### Ignite includes two primary boilerplates

##### Andross:

> The tried and true (React Navigation, Redux, & Redux Saga)

<img src="https://camo.githubusercontent.com/49c1245faf62f39e5a486e0df0f8e5fa281f06ac/687474703a2f2f69725f7075626c69632e73332e616d617a6f6e6177732e636f6d2f70726f6a656374732f69676e6974652f69676e6974652d616e64726f73732d6c61756e63682d73637265656e2e706e67" alt="Andross" width="400">

It includes:

- React Native 0.57.7
- React Navigation 3.0.0
- Redux
- Redux Sagas
- And more!

##### Bowser:

> The latest and greatest (React Navigation, MobX State Tree, & Typescript)

<img src="https://camo.githubusercontent.com/b598169ed7d3a9eea78e921acd10adee55bf53eb/687474703a2f2f69725f7075626c69632e73332e616d617a6f6e6177732e636f6d2f70726f6a656374732f69676e6974652f69676e6974652d626f777365722d6c61756e63682d73637265656e2e706e67" alt="bowser" width="400">

This boilerplate includes:

- React Native
- React Navigation
- MobX State Tree
- Typescript
- Reactotron (requires 2.x)
- And more!

I won't go into detail about these services in this post. I will choose a preferred boilerplate after testing and explain the services more in detail in a future post.

## How to:

Lets choose `ignite`s newest boilerplate `bowser`.

First of all to start of a bowser boilerplate, simply run the following command and choose `bowser` from the terminal menu:

```
$ ignite new MyNewAppName
-----------------------------------------------
  (                  )   (
  )\ )   (        ( /(   )\ )    *   )
 (()/(   )\ )     )\()) (()/(  ` )  /(   (
  /(_)) (()/(    ((_)\   /(_))  ( )(_))  )\
 (_))    /(_))_   _((_) (_))   (_(_())  ((_)
 |_ _|  (_)) __| | \| | |_ _|  |_   _|  | __|
  | |     | (_ | | .` |  | |     | |    | _|
 |___|     \___| |_|\_| |___|    |_|    |___|
-----------------------------------------------

An unfair headstart for your React Native apps.
https://infinite.red/ignite

-----------------------------------------------

🔥 igniting app BowserStyle
? Which boilerplate would you like to use? Bowser (React Navigation, MobX State Tree, & TypeScript)
> Bowser  *
> Andross
```

If you open your `NewAppProject` directory, you will see loads of files that come will the `ignite` boilerplate compared to the standard setup using `react-native new` or `expo init` command.

Run simulator:

```
For iOS:
  cd ProjectFolder
  react-native run-ios

For Android:
  cd ProjectFolder
  react-native run-android
```

To see what else Ignite CLI can do in the command line:

```
  cd ProjectFolder
  ignite
```

### Project directory structure

The project structure is some more advanced that a simple `react-native new` / `expo init` default project structure.

The project structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── i18n
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
│   ├── environment-variables.ts
├── storybook
│   ├── views
│   ├── index.ts
│   ├── storybook-registry.ts
│   ├── storybook.ts
├── test
│   ├── __snapshots__
│   ├── storyshots.test.ts.snap
│   ├── mock-i18n.ts
│   ├── mock-reactotron.ts
│   ├── setup.ts
│   ├── storyshots.test.ts
├── README.md
├── android
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
└── package.json
```

Lets go deeper into the directories included in `Bowser`.

#### The `./app` directory:

Like when running the default structure commands, the `app` directory is present.

Inside the `app` directory, it will look similar to this:

```
app
│── components
│── i18n
├── models
├── navigation
├── screens
├── services
├── theme
├── utils
├── app.tsx
├── environment-variables.ts
```

**components:**
This is where your components live. Normally you would have components created with a `.js` file. Since `bowser` includes typescript, each component will have a directory containing a `.tsx` file, along with a `story.tsx` file. Optionally if the component is large, the component directory can include `preset.ts`, and `props.ts` files for better organisation.

**i18n:**
If you included the `react-native-i18n` service, this is where your translations live.

**models:**
This is where your models and model logic lives. Each model has a directory that contains the `mobx-state-tree` model file, test file, and other supported files like actions, types etc.

**navigation:**
Your `react-navigation` files live here.

**screens:**
The react screen component which takes up the entire screen and is part of the navigation hierarchy lives here. Each directory contains the `.tsx` file, assets or helper files.

**services:**
Services that interface with the outside world like REST APIs, Push Notifications etc, live here.

**theme:**
Your theme lives here, built including spacing, colors, typography, timing etc.

**utils:**
Shared files like helpers, utilities like date helpers, formatters etc are often placed here. If a helper or utility is only used by a specific component/model in your application the file should live with that component/model.

**app.tsx:**
Your entry point to your application. The main App component that renders the rest of the application. You can also choose if you would like to run the app in storybook mode.

#### The `./ignite` directory:

This is where the `ignite` CLI and all things `ignite` live. Generators, plugins and examples are included to help you get started.

#### The `./storybook` directory:

This is where stories will be registered and where the Storybook configs will live.

[Storybook](https://storybook.js.org/basics/guide-react-native/) is a UI development environment for rapid iteration and testing of UI components. This allows you to visualise the different states of the individual components of your app and test the UI interactions.

#### The `./test` directory:

This is where your Jest configs and mocks live. As well as storyshots test files.

## Attaching to Expo

If you are like me and use the `expo` toolchain to kick of your project, and you would still like to use one of Ignites boilerplates simply use the command:

```
expo init <AppName>
cd <AppName>
ignite attach
// Then choose which boilerplate you would like to use
```

This also works for:

- create-react-native-app
- create-react-app
- normal Reach JS projects
- empty directories

Not all plugins work in all environments, but many features of Ignite CLI are available.

For more info check out their documentation at https://expo.io/ !