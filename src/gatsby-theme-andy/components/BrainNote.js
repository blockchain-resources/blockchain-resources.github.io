/** @jsx jsx */
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled, ThemeProvider, jsx } from "theme-ui";

import useWindowWidth from "gatsby-theme-andy/src/utils/useWindowWidth";
import components from "gatsby-theme-andy/src/components/MdxComponents";
import Footer from "gatsby-theme-andy/src/components/Footer";
import Popover from "gatsby-theme-andy/src/components/Popover";

import theme from "gatsby-theme-andy/src/theme";

const BrainNote = ({ note }) => {
  const [width] = useWindowWidth();

  const popups = {};
  if (note.outboundReferenceNotes) {
    note.outboundReferenceNotes
      .filter(reference => !!reference.childMdx.excerpt)
      .forEach((ln, i) => {
        popups[ln.slug] = <Popover reference={ln} />;
      });
  }

  const AnchorTagWithPopups = props => (
    <components.a {...props} popups={popups} noPopups={width < 768} />
  );

  return (
    <ThemeProvider
      theme={theme}
      components={{ ...components, a: AnchorTagWithPopups }}
    >
      <div sx={{ flex: "1" }}>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
      </div>

      <Footer references={note.inboundReferenceNotes} />
    </ThemeProvider>
  );
};

export default BrainNote;
