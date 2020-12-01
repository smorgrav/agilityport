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
npm set registry https://registry.npm.vzbuilders.com:4443/npm-registry
```
2. Use the VersionMedia internal repo: 
```
git clone git@git.vzbuilders.com:denali-system-language/denali-react-beta.git
yarn link
``` 

At various points this app will use unpublished features from the denali-react-beta package. To be
sure you are using the correct one - you should use the internal repo and the branch: 
```
smorgrav/agilityport
```

# Starting from scratch
* yarn create react-app agilityport --template typescript
* yarn [add\\|link] @vzmi/denali-react-beta

If you develop denali-react locally you need to run 
```npm run-script build``` to make changes visible to this or other 
projects using the linked npm library.


