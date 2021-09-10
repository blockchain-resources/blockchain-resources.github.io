module.exports = {
  siteMetadata: {
    title: "Blockchain",
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: { notesDirectory: "notes/", rootNote: "index" },
    },
  ],
};
