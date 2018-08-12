let getLanguage = require('../services/getLanguage');

module.exports = function(req, res) {

  let language = getLanguage(req.params.language);

  if(typeof language === 'undefined') {
    res.status(404).json({});
  }

  res.json(language);
}