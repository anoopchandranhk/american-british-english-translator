const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanOnlyWords() {
        return Object.keys(americanOnly)
    }
    britishOnlyWords() {
        return Object.keys(britishOnly)
    }
    americanBritishOnlyWords() {
        return Object.values(britishOnly)
    }
    britishAmericanOnlyWords() {
        return Object.values(americanOnly)
    }
    americanSpellings() {
        return Object.keys(americanToBritishSpelling)
    }
    britishSpellings() {
        return Object.values(americanToBritishSpelling)
    }
    americanTitles() {
        return Object.keys(americanToBritishTitles)
    }
    britishTitles() {
        return Object.values(americanToBritishTitles)
    }
    americanToBritish(text) {
        const words = text.split(" ")
        let result = text
        console.log(words, "words");
        words.forEach(word => {

            if (this.americanOnlyWords().includes(word)) {
                console.log(americanOnly[word], "americanOnly[word]");
                result = result.replace(word, americanOnly[word])
            }
            if (this.americanSpellings().includes(word)) {
                console.log(americanToBritishSpelling[word], "americanToBritishSpelling[word]");
                result = result.replace(word, americanToBritishSpelling[word])
            }
            if (this.americanTitles().includes(word)) {
                console.log(americanToBritishTitles[word], "americanToBritishTitles[word]");
                result = result.replace(word, americanToBritishTitles[word])
            }
        })
        return result

    }
    britishToAmerican(text) {
        const words = text.split(" ")
        let result = text
        words.forEach(word => {

            if (this.britishOnlyWords().includes(word)) {
                console.log(britishOnly[word], "britishOnly[word]");
                result = result.replace(word, britishOnly[word])
            }
            if (this.britishSpellings().includes(word)) {
                console.log(britishToAmericanSpelling[word], "britishToAmericanSpelling[word]");
                result = result.replace(word, britishToAmericanSpelling[word])
            }
            if (this.britishTitles().includes(word)) {
                console.log(britishToAmericanTitles[word], "britishToAmericanTitles[word]");
                result = result.replace(word, britishToAmericanTitles[word])
            }
        })
        return result

    }

}

module.exports = Translator;