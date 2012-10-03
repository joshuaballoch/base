#Basic Templates for Fashion Me
These are the base files developing layouts/css for the site.
##How to run
Currently using middleman to compile sass. To run this locally, you need to use the middleman rails gem.

If you're using RVM:

1. Create a new rvm gemset eg: ```rvm --create use 1.9.3@base```
2. Install the middleman gem: ``` gem install middleman ```
3. Run the middleman server: ``` bundle exec middleman ```
4. Access the layout you want to check out on localhost:4567/path_to_page.html

All the files for the site are now in "source". The main layout is at base.html. This owuld be at localhost:4567/base.html