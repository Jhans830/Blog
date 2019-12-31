module.exports = {
  siteMetadata: {
    title: `InvokeCreateDotDev`,
    name: `InvokeCreate`,
    siteUrl: `https://invokecreate.dev`,
    description: `A blog highlighting all things Salesforce Marketing Cloud`,
    hero: {
      heading: '',
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
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
        name: `InvokeCreateDotDev`,
        short_name: `InvokeCreate`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};