import markdownit from "markdown-it";
import markPlugin from "markdown-it-mark";
import checkboxPlugin from "./checkboxes";
import embedsPlugin from "./embeds";
import breakPlugin from "./breaks";

export default function rules({
  getLinkComponent,
}: {
  getLinkComponent: Function;
}) {
  return markdownit("default", {
    breaks: false,
    html: false,
  })
    .use(breakPlugin)
    .use(embedsPlugin(getLinkComponent))
    .use(checkboxPlugin)
    .use(markPlugin);
}