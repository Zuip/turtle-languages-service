let languages = require('../languages');

module.exports = function(translationLanguage) {
  return languages.map(
    language => ({
      code: language.code,
      name: language.translations.find(
        translation => translation.code == translationLanguage
      ).translation
    })
  );
}