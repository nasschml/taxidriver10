/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.taxidriver10.fr',
  generateRobotsTxt: true,
  // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
