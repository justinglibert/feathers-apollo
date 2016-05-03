'use strict';


const comment = require('./comment');


const author = require('./author');


const post = require('./post');


module.exports = function() {
  const app = this;


  app.configure(post);
  app.configure(author);
  app.configure(comment);
};
