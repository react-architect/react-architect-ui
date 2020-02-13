

# Why Storybook?

- we need fast feedback during development
- test-driven is great, but for pure UI (anything visible) it is laborious to write all the tests


# Setup

## Resources

- template: https://github.com/cazala/react-storybook-typescript-template
- https://blog.hichroma.com/storybook-vs-styleguidist-2bd93d6dcc06
- bdd: https://medium.com/@mlthuret/building-a-react-components-living-documentation-using-react-storybook-5f11f0e7d23e

## Storybook



## Typescript

We want to use the type-safety of TypeScript. It comes with some effort to
make sure it all matches. But it brings us confidence that there are fewer (or no)
bugs

Typescript requires us to import React the following way:

```javascript
import * as React from 'react';
```


## BDD

## Documentation

The components need to be documented, esp. when they can be configured

https://www.npmjs.com/package/@storybook/addon-docs


# Development

## Themed

We want the user of our ui-library (a developer) to be able to use a theme.
Reuse default values. specify certain aspects of the ui only once for all.

We create an interface to specify the values we expect from a theme.

## Separate Logic from Layout

Strictly!