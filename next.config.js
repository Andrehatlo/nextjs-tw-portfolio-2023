/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
}
