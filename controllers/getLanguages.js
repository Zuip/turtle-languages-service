let getLanguage = require('../services/getLanguage');
let getTranslatedLanguages = require('../services/getTranslatedLanguages');
let languages = require('../languages');

module.exports = function(req, res) {

  if(typeof req.query.language !== 'undefined') {

    let language = getLanguage(req.query.language);

    if(typeof language === 'undefined') {
      return res.status(404).json('Language does not exist');
    }

    return res.json(
      getTranslatedLanguages(req.query.language)
    );
  }

  return res.json(
    languages.map(
      language => language.code
    )
  );
}