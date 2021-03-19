FROM jekyll/jekyll:latest

EXPOSE 4000

ENV JEKYLL_ENV=development

ADD $PWD/Gemfile /srv/jekyll/Gemfile

RUN bundle install