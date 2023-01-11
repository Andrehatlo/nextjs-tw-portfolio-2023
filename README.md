# Next.js + Tailwind Portfolio 

A Jekyll clone using NextJS, Typescript and Tailwind.

Typescript, NextJS/13 and Tailwind.

Fully responsive portfolio site that includes:
- Light/Dark Mode Themeswitcher.
- Developer Introduction page with Social Links
- Markdown Blog Page (Jekyll type).
- Weather Condition Search and Geolocation Api Integration.
TODO [] - Skill page (skill -> icon)
TODO [] - Project page (vercel import from user api?)

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

//content in markdown
```md



Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
