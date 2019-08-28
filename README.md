# [bangladeshihistory.com](bangladeshihistory.com)

## Abstract

This is my 3.0 blog. It was built using GatsbyJS.

This GatsbyJS single-page-application is virtualized in a Vagrant box, to be hosted on a Linode, integrated in CircleCI, tested with Jest BDD.

### What is it

Traditional static site generators such as Jekyll let you put text or markdown in a specific directory such as pages/ in a version-controlled codebase. They then build a specific kind of site, usually a blog, as HTML files from the content you've added. These files can be cached and served from a CDN.

Content Management Systems (CMSs) like Wordpress give you an online text editor to create content. You customize the look and feel through choosing themes and plugins, or writing custom PHP or Javascript code. Content is saved in a database, which is retrieved and sent to users when they visit the website. Depending on your requirements you can self-host your website, or use an official hosting provider.

Site builders like Squarespace are a type of hosted closed-source CMS. They focus on making it fast to build a website; however, they don't allow self-hosting or enable you to export your website and customize it.

This is where GatsbyJS comes in. Gatsby lets you build blazing fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future.

Stripped down, it's a VagrantFile, a shell script and an Ngnix configuration. It's a box that can be used to automate deployments to *ANY* environment. It is currently provisioned to deploy to a Linode (Nanode).

Gatsby offers other deployment options, none of them really work quite like Vagrant for me.

### How does it work

Our first step was to create an application using `gatsbyJS`. Then, we use `gatsby build` to give us a static HTML directory, bundled with SPA-magic.

Then we create a `VagrantFile` that copies over our `/public` directory to our serving directory for our HTML. We use a regular `ubuntu/trusty64` box. After that we provision the box with `node` and `nginx`. After providing some `Linode API` keys, we create a `Nanode` in the Linode cloud!

### What are the benefits

1. **Continuous Delivery**: Vagrant maintains a development environment, as well as pushes and manages our code!
2. **Continuous Integration**: CircleCI lets us use some really neat WebHooks that build and test our Vagrant, every time we want it to.
3. **Great structure for a tested React App**: Using CypressIO, JEST and Gatsby, we piece together a well-tested portfolio SPA, in BDD fashion.

### See [Wiki](https://github.com/sajjadhossain/terra/wiki)
