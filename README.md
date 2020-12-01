# Agility Port
A denali react sample application using dog agility as the showcase.

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

# Starting from scratch
* yarn create react-app agilityport --template typescript
* yarn [add\\|link] @vzmi/denali-react-beta

If you develop denali-react locally you need to run 
```npm run-script build``` to make changes visible to this or other 
projects using the linked npm library.



