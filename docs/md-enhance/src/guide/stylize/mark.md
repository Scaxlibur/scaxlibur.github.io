---
title: Mark
icon: highlighter
---

Highlight content with `<mark>` tag in your VuePress site.

<!-- more -->

## Settings

```js {7} title=".vuepress/config.js"
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // enable mark
      mark: true,
    }),
  ],
};
```

## Syntax

Use `== ==` to mark.

::: md-demo Demo

VuePress Theme Hope is ==powerful==.

:::
