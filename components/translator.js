const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const reverseDictionary = (obj) => {
    return Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));
};


const britishToAmericanSpelling = reverseDictionary(americanToBritishSpelling)
const britishToAmericanTitles = reverseDictionary(americanToBritishTitles)

const americanDictionary = { ...americanOnly, ...americanToBritishSpelling }
const britishDictionary = { ...britishOnly, ...britishToAmericanSpelling }
const britishTimeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
const americanTimeRegex = /([1-9]|1[012]):[0-5][0-9]/g;

class Translator {

    americanToBritish(text) {
        return this.translate(text, americanDictionary, americanToBritishTitles, americanTimeRegex, 'american-to-british') || text;
    }

    britishToAmerican(text) {
        return this.translate(text, britishDictionary, britishToAmericanTitles, britishTimeRegex, 'british-to-american') || text;
    }
    translate(text, dict, titles, regex, locale) {
        const lowerText = text.toLowerCase();
        const matchesMap = {};
        Object.entries(titles).map(([k, v]) => {
            const titleRegex = locale === "american-to-british" ? new RegExp("\\b" + k + "." + "\\b") : new RegExp("\\b" + k + "\\b");
            if ((titleRegex).test(lowerText)) {
                matchesMap[k] = v.charAt(0).toUpperCase() + v.slice(1);
            }
        });
        const wordsWithSpace = Object.fromEntries(
            Object.entries(dict).filter(([k, v]) => k.includes(" "))
        );
        Object.entries(wordsWithSpace).map(([k, v]) => {
            if (lowerText.includes(k)) {
                matchesMap[k] = v;
            }
        });
        lowerText.match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g).forEach((word) => {
            if (dict[word]) {
                matchesMap[word] = dict[word];
            }
        });
        const matchedTimes = lowerText.match(regex);
        if (matchedTimes) {
            matchedTimes.map((e) => {
                if (locale === "american-to-british") {
                    return (matchesMap[e] = e.replace(":", "."));
                }
                return (matchesMap[e] = e.replace(".", ":"));
            });
        }

        // No matches.
        if (Object.keys(matchesMap).length === 0) {
            return null;
        }
        // Return logic.
        const translation = this.replaceAll(text, matchesMap);
        const translationWithHighlight = this.replaceAllWithHighlight(text, matchesMap);

        return [translation, translationWithHighlight];


    }
    replaceAll(text, matchesMap) {
        const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
        return text.replace(re, (matched) => matchesMap[matched.toLowerCase()]);
    }
    replaceAllWithHighlight(text, matchesMap) {
        const re = new RegExp(Object.keys(matchesMap).join("|"), "gi");
        return text.replace(re, (matched) => {
            return `<span class="highlight">${matchesMap[matched.toLowerCase()]
                }</span>`;
        });
    }


}

module.exports = Translator;