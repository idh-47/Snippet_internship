/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://snippet.ma",
  changefreq: "weekly",
  priority: 0.7,
  generateRobotsTxt: true, // (optional)
  // ...other options
};
