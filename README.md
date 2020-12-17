# Agility Port
A denali react sample application using dog agility as the showcase.
 
The intention of this repo are two fold
1. Document step by step how to create a real world react application with the denali design system
2. Improve the denali react library while doing so 

As authentication and storage we use firebase/firestore.

# Prerequisites 
You need the denali-react library (currently in beta and not publicly available).

There are two ways:
1. Use the VerizonMedia npm registry 
```
npm config set @vzmi:registry https://registry.npm.vzbuilders.com:4443/npm-registry
```
2. Use the VersionMedia internal repo: 
```
git clone git@git.vzbuilders.com:denali-system-language/denali-react-beta.git
yarn link
``` 

3. Use a personal fork to be able to contribute changes
```
Fork git@git.vzbuilders.com:denali-system-language/denali-react-beta.git on github
git clone git@git.vzbuilders.com:smorgrav/denali-react-beta.git (or whatever your fork is called)

# If you already had cloned the original repo you can switch origin like this:

git remote rename origin upstream
git remote add origin git@git.vzbuilders.com:smorgrav/denali-react-beta.git #(the forked repo)
git fetch origin
git checkout -B master --track origin/master #(to track the new origin instead of upstream)
git push origin

yarn link
```

At various points this app will use unpublished features from the denali-react-beta package. To be
sure you are using a version compatible with this repo - you should use the fork: 
```
git@git.vzbuilders.com:smorgrav/denali-react-beta.git
```

# Starting from scratch
```
yarn create react-app agilityport --template typescript
yarn [add|link] @vzmi/denali-react-beta # See prerequisites for the add vs link option
```

If you develop denali-react locally you need to run 
```yarn build``` to make changes visible to this or other 
projects using the linked npm library.

## Scaffolding the app
Starting from scratch we have some setup todo. Some of these are just preferences others are
given by the choice of technology. 

### Install Denali
The denali react library is only a convenience over the css framework. 
So the css framework is a prerequisite.
 
``` yarn add denali-css```

Typically, you import this at the top-level e.g. App.tsx with

```import denali-css/css/denali.css```

### Install and configure firebase


### Configure linting and best practices
I'm a big fan of mandating a specific code style and auto fix, format
the code accordingly. This makes the code easier to read, diff and you avoid
meaningless PR reviews about where to put whitespaces.

```
yarn add eslint
yarn run eslint --init
# Example choises of init wizard: enforce style, esm, react, 
  typescript, browser, google style (guide) and JSON format
```

A small comparison of common styleguide can be found [here](https://medium.com/better-programming/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7)

To save you some gray hairs you can setup the auto fix feature on save in your favorite IDE

* [Auto-eslint VSCode](https://www.digitalocean.com/community/tutorials/workflow-auto-eslinting)
* [Auto-eslint Webstorm](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) 

As a final touch, we setup this auto-fix on git stage:

```npx mrm lint-staged```

This kind of forces the chosen style and best practices as far as is practical.


