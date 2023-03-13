---
id: index
---

# Intro to Front End

You've completed a JavaScript bootcamp, like [Hack Reactor](https://www.galvanize.com/explore-hack-reactor-coding-bootcamps/), but you're not feeling data structures, and you think that maybe, just maybe, front end might be your jam. The problem is that your 12-week-or-so full stack training has left your front end experience full of holes ...

You don't know what you don't know, but you're in the right place. Through the course of this brief workshop, we'll build React components while introducing you to additional concepts and technologies that should helpt to backfill those holes, while also providing some direction where to go next.

## The Three Pillars

The three pillars on which all of front end engineering stand are:

- CSS
- HTML
- JavaScript

Presumably, you've got a handle on JavaScript by now. In my personal experience with bootcamps and bootcamp graduates, however, you are likely under-prepared in CSS and HTML.

As a front end engineer, you are expected to be a front end _specialist_. Competancy, if not mastery, in HTML and CSS is nonnegotiable.

That said, we'll put a pin in this particular deficiency, and return to it in our first exercise.

## A word on frameworks

Frameworks -- Bootstrap, Material UI, etc. -- are often used to quickly prototype an app. For that purpose, they are ... fine ... I guess. Back end and full stack engineers tend to overrely on them.

As a front end engineer, frameworks are a crutch that prevents you learning the basic skills of your craft. They can be useful as reference: understand them, what they're doing and why they're doing it, but _don't use them_. Never use them.

## Setup

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

## Troubleshooting

With luck, things will just work. However, some troubleshooting my be required.

> If Storybook complains about your **npm version** during install, allow it to run its compatibility migration.

> If Storybook crashes when you try to launch it, delete your `node_modules` folder and `package-lock.json` file.
> 
> Run `npm install`, then try to launch Storybook again.

## Recap

We now know ...

- ... that CSS, HTML and JS are the fundamental pillars of front end.
- ... that overreliance on frameworks can hinder us.
- ... how to install Storybook in a project.

Your new Storybook should now be open in a browser tab. There's some introductory content and examples, so feel free to explore what's there.

Be sure to bookmark the [Storybook Guides page](https://storybook.js.org/docs/react/get-started/install/) for future reference, and take note of the [Storybook Tutorials page](https://storybook.js.org/tutorials/); it's a good resource to follow up with after completing this workshop.

Next up, our first exercise ...