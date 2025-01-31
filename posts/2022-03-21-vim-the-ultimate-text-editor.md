---
title: "Vim - The ultimate text editor?"
metaTitle: "Vim - The ultimate text editor?"
metaDesc: "Testing vim for all my future projects"
socialImage: "images/vim-banner.jpeg"
date: "2022-03-21"
tags:
    - Vim
    - Editor
---

# Vim

Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple macOS.

## Installation

Because we want an addon thats called `You complete me`, we cant use the standard `vim` that comes with the macbook pro.

To install the latest version, use homebrew:

``` 
brew install vim 
```

Set the following infront of your path so when you use `vim <file>` it will open the version you just installed via homebrew.

In `.zshrc` copy it should look something like this:

```
export PATH="/usr/local/bin:$PATH
```

Now you have `vim` with python 8 so you can use all the features of your normal text editor in `vim`.

## The Ultimate vimrc

The Ultimate vimrc is a collection of vimrc configurations to make easy the usage of vim.

To download the The Ultimate vimrc, you need to install the git client. If you need install it, use home brew:

```
brew install git
```

Now, download the vimrc files:

```
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
```

To install the complete version, run:

```
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

To install the basic version, run:

```
sh ~/.vim_runtime/install_basic_vimrc.sh
```