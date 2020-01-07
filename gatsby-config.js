module.exports = {
  siteMetadata: {
    title: `InvokeCreate - A Salesforce Marketing Cloud Blog`,
    name: `InvokeCreate`,
    siteUrl: `https://invokecreate.dev`,
    description: `A blog highlighting all things Salesforce Marketing Cloud`,
    hero: {
      heading: 'A Salesforce Marketing Cloud Blog',
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/invokecreate/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jason-hanshaw-developer/`,
      },
      {
        name: `stackoverflow`,
        url: `https://salesforce.stackexchange.com/users/50722/jason-hanshaw`
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "ixxuvref3t1f",
        accessToken: "FtFRlDQWT6FroV_B4rvbD6truwAwbklwO9CcaX4aVdI",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155466259-1",
      },
    },
    {
     resolve: '@narative/gatsby-theme-novela',
     options: {
       sources: {
         contentful: true,
       },
     },
    },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  ],
};