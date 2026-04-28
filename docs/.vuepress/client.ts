import SocialLink from "./components/SocialLink.js";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance(ctx) {
    ctx.app.component("SocialLink", SocialLink);
  },
});
