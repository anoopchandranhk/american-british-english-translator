'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body
      if (!locale || text === undefined) {
        return res.json({ error: 'Required field(s) missing' })
      }
      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' })
      }
      if (text.trim() === "") {
        return res.json({ error: 'No text to translate' })
      }
      let translation = ""
      if (locale === 'american-to-british') {
        translation = translator.americanToBritish(text)
      }
      if (locale === 'british-to-american') {
        translation = translator.britishToAmerican(text)
      }
      if (text === translation) {
        return res.json({ translation: 'Everything looks good to me!', text: text })
      }
      return res.json({ translation: translation[1], text: text })
    });
};
