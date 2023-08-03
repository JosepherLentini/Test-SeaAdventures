/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "./src/styles/helpers/mixins.scss";
      @import "./src/styles/helpers/devices.scss";
      @import "./src/styles/tipography/headings.scss";
      @import "./src/styles/layout/colors.scss";
        `,
  },
};

module.exports = nextConfig;
