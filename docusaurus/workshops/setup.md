---
id: setup
---

# Setup

Now, let's set up to do some work.

The workshop will be in [Storybook](https://storybook.js.org/), and will provide some introduction to [TypeScript](https://www.typescriptlang.org/).

Storybook is not made for empty projects, and will look into your project's dependencies during its install process and provide you with the best configuration available.

To start it off on the right foot then, we need to set up an app that it can reference. For simplicity's sake, we'll use [Create React App](https://create-react-app.dev/).

In your terminal, navigate to your working location, then run the follow commands:

```text
npx create-react-app slithy-workshop --template typescript
cd slithy-workshop
npx storybook init
```

To launch:
```text
npm run storybook
```

Because we installed Create React App using its TypeScript template, Storybook will be automatically configured for TypeScript. Nice!

## Troubleshooting

With luck, things will just work. However, some troubleshooting my be required.

> If Storybook complains about your **npm version** during install, allow it to run its compatibility migration.

> If Storybook crashes when you try to launch it, delete your `node_modules` folder and `package-lock.json` file.
> 
> Run `npm install`, then try to launch Storybook again.

## Recap

We now know ...

- ... that we'll be using Storybook and TypeScript throughout this workshop.
- ... how to quickly install and troubleshoot Storybook in a Create React App project.

Your new Storybook should now be open in a browser tab. There's some introductory content and examples, so feel free to explore what's there.

Be sure to bookmark the [Storybook Guides page](https://storybook.js.org/docs/react/get-started/install/) for future reference, and take note of the [Storybook Tutorials page](https://storybook.js.org/tutorials/); it's a good resource to follow up with after completing this workshop.

Next up, our first exercise ...