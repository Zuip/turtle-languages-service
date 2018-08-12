let languages = require('../languages');

module.exports = function(languageToFind) {
  return languages.find(
    language => language.code === languageToFind
  );
}