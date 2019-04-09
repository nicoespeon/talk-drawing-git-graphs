import React from "react";
import {
  Gitgraph,
  Orientation,
  Mode,
  TemplateName,
  templateExtend
} from "@gitgraph/react";
import { LiveCode } from "mdx-deck-live-code";

export default function PlaygroundV2() {
  return (
    <LiveCode
      size="fullscreen"
      code={`<Gitgraph>
  {gitgraph => {
  }}
</Gitgraph>`}
      providerProps={{
        scope: { Gitgraph, Orientation, Mode, TemplateName, templateExtend }
      }}
      editorProps={{
        style: {
          fontSize: "18px",
          color: "white"
        }
      }}
      errorProps={{
        style: {
          fontSize: "20px"
        }
      }}
    />
  );
}
