---
title: "Hugo - as a static page blog"
metaTitle: "Hugo - as a static page blog"
metaDesc: "Create your own blog with Hugo, a static site generator, on the same line as Jekyll."
socialImage: "/images/hugogit.jpg"
date: "2019-08-01"
tags: 
  - Jekyll
  - Github
  - Hugo
  - Markdown
---

After the setup of my Jekyll site I came across Hugo.

Hugo is a static site generator, on the same line as Jekyll as it uses `Markdown` to create blog posts.

The main difference i noticed after testing Jekyll against Hugo is that it's fast. It seems like it has Go under the hood.

Let me do a quick tutorial to setup Hugo, its very easy and almost only done in the commandline:

## Hugo quicksetup tutorial:

## Step 1: Install `hugo`

I use mac, so for those other operating systems out there:

#### Windows:

Get the [Chocolatey](https://chocolatey.org/) package managment, then you can install Hugo with:

```ruby
choco install hugo -confirm
```

#### Linux

Get [Brew](https://brew.sh/) and follow the directions there.

```ruby
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Run the `brew` commend to install `hugo`

```ruby
brew install hugo
```

#### MAC (command above)

## Step 2: Create a new site:

Go to the directory where you want to create your `Hugo`{:ruby} repo, then run this command:

```ruby
hugo new site <name-of-site-dir>
```

Will create a new Hugo site in a folder named `name-of-site-dir`.

## Step 3: Add a Theme

> Requirement: `git` is installed

See [themes.gohugo.io](themes.gohugo.io) to browse themes.

I will use the [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/)

Step into the site folder and run the folloing commands:

```ruby
git init

git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

Now edit the `config.toml` configuration file and add the Ananke theme:

Either echo it in from commandline:

```ruby
echo 'theme = "ananke"' >> config.toml
```

Or edit it from your text editor:

```ruby
baseURL = "http://example.org/"
languageCode = "en-us"
title = "My New Hugo Site"
theme = "ananke"
```

## Step 4: Add content

```ruby
hugo new posts/my-first-post.md
```

Edit the file if you like, you can use both `Markdown` or `Html`, your choice.

## Step 5: Start the server

```ruby
hugo server -D
```

Then navigate to [http://localhost:1313/.](http://localhost:1313/.)

## Step 6: Customize the Theme

You can tweak your site to personalise it before you release it to the public.

### Site config

Open `config.toml` in your favourite text editor.

Then replace `title` with something personal and `baseUrl` (if you have a domain already), like i did:

```ruby
baseURL = "http://andrehatlo.org/"
languageCode = "en-us"
title = "Hello! I'm André :)"
theme = "ananke"
```

> Tip:
> Making changes to files in your new Hugo site
> while the server is running will automatically update
> the site and you will see the changes right away.

## Now your site is up and running you can find more to do by reading the Hugo docs [here](https://gohugo.io/documentation/)

> Note that i stayed with Jekyll even though Hugo was an awesome choice for a personal blog with the same features > but fast. This is mostly because i found that Jekyll was more intuitive when coming to posting and doing simple > customization. What ever you pick if you choose to start a blog/portfolio you cant go wrong either way!
