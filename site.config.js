module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'bd05296aa98f4244b83084803e29f712',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '51372708-f6f7-40e1-b43e-24cc8c5563bd',

  // basic site info (required)
  name: 'NOMAD 6995',
  domain: 'frc6995nomad-site.vercel.app',
  author: 'NOMAD 6995',

  // open graph metadata (optional)
  description: 'A community FIRST Robotics team',
  socialImageTitle: 'NOMAD 6995',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  github: 'frc6995',
  instagram: 'frc6995nomad',
  facebook: 'frc6995nomad',
  thebluealliance: 'frc6995',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,


  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/about': 'c2193c3835424502a210fd91966828c1',
    '/blog': 'e48ebb9a44df4dcd94a62a402dea2b69'
  }
}
