/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  }
}
