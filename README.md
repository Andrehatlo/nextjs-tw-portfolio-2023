# Next.js + Tailwind Portfolio 

Jekyll clone using NextJS, Typescript and Tailwind.

Built with Typescript, NextJS/13 and Tailwind.

[Check out the demo](https://andrehatlo.com/)

## Features:
Fully responsive portfolio site that includes:
- Light/Dark Mode Themeswitcher.
- Developer Introduction page with Social Links
- Markdown Blog Page (Jekyll type).
- Weather Condition Search and Geolocation Api Integration.
- Stack icon animation


## How to use

```bash
git clone repo
```

Get a API key from OpenWeatherAPI

Rename `.env-example` to `.env`.

Add API key to `WEATHER_API_KEY`.

```bash
npm install
```

```bash
npm run dev
```

## Adding Blog Posts

Add blog posts `app/posts` folder in this format:

Filename will become the slug, for example filename `2022-07-01-ssg-ssr.md` is slug `/blog/2022-07-01-ssg-ssrz`

```
---
title: "Title"
metaTitle: "Title"
metaDesc: "desc"
socialImage: "img"
date: "year-month-day"
tags:
        - "1"
        - "2"
---

# Content In Markdown Here
```






