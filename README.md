# Portofolio
[![Netlify Status](https://api.netlify.com/api/v1/badges/73e106a8-871a-4afe-bfeb-b2943c6a3e31/deploy-status)](https://app.netlify.com/sites/portofolio-jjghali/deploys)
## Install and run
```
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.zshrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

gem install bundler
bundle config set --local path 'vendor/bundle'
bundle install 
bundle exec jekyll serve
```
