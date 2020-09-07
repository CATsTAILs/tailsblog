/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `catstail's blog`,          // Displayed in header
  description: `Write Everything`,     // Site description
  maxWidth: "768px",                  // Max width of website
  enableAbout: true,                  // Enables about page
  siteUrl: `https://catstail.netlify.app/`, // For sitemap & RSS feed
  useScrollIndicator: true,           // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `catstail`,                             // Name shows on profile
  profileDescription: "Write Everything",   // Shows under author name
  profileImageName: `profile.jpeg`,                  // Place profile.jpg/.jpeg/.png in _assets folder
  location: "",                                      // Location under profileDescription. "" --> disabled
  footerLink: "",                                    // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email:     { emailAddress: "philip94@snu.ac.kr", showHeaderIcon: true },
    github:    { accountName: "CATsTAILs", showHeaderIcon: true },
    facebook:  { accountName: "", showHeaderIcon: false },
    instagram: { accountName: "", showHeaderIcon: false },
    twitter:   { accountName: "", showHeaderIcon: false },
    linkedIn:  { accountName: "", showHeaderIcon: false },   // Use URL after "linkedin.com/"
    medium:    { accountName: "catsdetail", showHeaderIcon: true },   // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: { email: false, facebook: true, twitter: true, reddit: false, linkedIn: false },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" },      // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" },   // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light",                      // Options: dark / light -- applied to first visitors
  showTimeToRead: true,                      // Shows time to read for each post in main page
  breakCodeLines: false,                      // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`,        // Favicon
  gaTrackingId: ``,                           // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``,                        // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
