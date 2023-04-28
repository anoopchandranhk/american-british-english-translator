'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body

      if (locale === 'american-to-british') {
        let britishTranslation = translator.americanToBritish(text)
        console.log(britishTranslation, "britishTranslation");
        return res.json({translation:britishTranslation})

      }
      if (locale === 'british-to-american') {
        let americanTranslation = translator.britishToAmerican(text)
        console.log(americanTranslation, "americanTranslation");
        return res.json({translation:americanTranslation})

      }
    });
};
