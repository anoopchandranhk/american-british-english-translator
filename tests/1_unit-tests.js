const chai = require('chai');
const { assert } = chai;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
    suite('solver tests', function () {
        // Translate Mangoes are my favorite fruit. to British English
        test("Translate Mangoes are my favorite fruit. to British English", function done() {
            assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.')[0], 'Mangoes are my favourite fruit.');
        })
        // Translate I ate yogurt for breakfast. to British English
        test("Translate I ate yogurt for breakfast. to British English", function done() {
            assert.equal(translator.americanToBritish('I ate yogurt for breakfast.')[0], 'I ate yoghurt for breakfast.');
        })
        // Translate We had a party at my friend's condo. to British English
        test("Translate We had a party at my friend's condo. to British English", function done() {
            assert.equal(translator.americanToBritish(`We had a party at my friend's condo.`)[0], `We had a party at my friend's flat.`);
        })
        // Translate Can you toss this in the trashcan for me? to British English
        test("Translate Can you toss this in the trashcan for me? to British English", function done() {
            assert.equal(translator.americanToBritish('Can you toss this in the trashcan for me?')[0], 'Can you toss this in the bin for me?');
        })
        // Translate The parking lot was full. to British English
        test("Translate The parking lot was full. to British English", function done() {
            assert.equal(translator.americanToBritish('The parking lot was full.')[0], 'The car park was full.');
        })
        // Translate Like a high tech Rube Goldberg machine. to British English
        test("Translate Like a high tech Rube Goldberg machine. to British English", function done() {
            assert.equal(translator.americanToBritish('Like a high tech Rube Goldberg machine.')[0], 'Like a high tech Heath Robinson device.');
        })
        // Translate To play hooky means to skip class or work. to British English
        test("Translate To play hooky means to skip class or work. to British English", function done() {
            assert.equal(translator.americanToBritish('To play hooky means to skip class or work.')[0], 'To bunk off means to skip class or work.');
        })
        // Translate No Mr. Bond, I expect you to die. to British English
        test("Translate No Mr. Bond, I expect you to die. to British English", function done() {
            assert.equal(translator.americanToBritish('No Mr. Bond, I expect you to die.')[0], 'No Mr Bond, I expect you to die.');
        })
        // Translate Dr. Grosh will see you now. to British English
        test("Translate Dr. Grosh will see you now. to British English", function done() {
            assert.equal(translator.americanToBritish('Dr. Grosh will see you now.')[0], 'Dr Grosh will see you now.');
        })
        // Translate Lunch is at 12:15 today. to British English
        test("Translate Lunch is at 12:15 today. to British English", function done() {
            assert.equal(translator.americanToBritish('Lunch is at 12:15 today.')[0], 'Lunch is at 12.15 today.');
        })
        // Translate We watched the footie match for a while. to American English
        test("Translate We watched the footie match for a while. to American English", function done() {
            assert.equal(translator.britishToAmerican('We watched the footie match for a while.')[0], 'We watched the soccer match for a while.');
        })
        // Translate Paracetamol takes up to an hour to work. to American English
        test("Translate Paracetamol takes up to an hour to work. to American English", function done() {
            assert.equal(translator.britishToAmerican('Paracetamol takes up to an hour to work.')[0], 'Tylenol takes up to an hour to work.');
        })
        // Translate First, caramelise the onions. to American English
        test("Translate First, caramelise the onions. to American English", function done() {
            assert.equal(translator.britishToAmerican('First, caramelise the onions.')[0], 'First, caramelize the onions.');
        })
        // Translate I spent the bank holiday at the funfair. to American English
        test("Translate I spent the bank holiday at the funfair. to American English", function done() {
            assert.equal(translator.britishToAmerican('I spent the bank holiday at the funfair.')[0], 'I spent the public holiday at the carnival.');
        })
        // Translate I had a bicky then went to the chippy. to American English
        test("Translate I had a bicky then went to the chippy. to American English", function done() {
            assert.equal(translator.britishToAmerican('I had a bicky then went to the chippy.')[0], 'I had a cookie then went to the fish-and-chip shop.');
        })
        // Translate I've just got bits and bobs in my bum bag. to American English
        test("Translate I've just got bits and bobs in my bum bag. to American English", function done() {
            assert.equal(translator.britishToAmerican(`I've just got bits and bobs in my bum bag.`)[0], `I've just got odds and ends in my fanny pack.`);
        })
        // Translate The car boot sale at Boxted Airfield was called off. to American English
        test("Translate The car boot sale at Boxted Airfield was called off. to American English", function done() {
            assert.equal(translator.britishToAmerican('The car boot sale at Boxted Airfield was called off.')[0], 'The swap meet at Boxted Airfield was called off.');
        })
        // Translate Have you met Mrs Kalyani? to American English
        test("Translate Have you met Mrs Kalyani? to American English", function done() {
            assert.equal(translator.britishToAmerican('Have you met Mrs Kalyani?')[0], 'Have you met Mrs. Kalyani?');
        })
        // Translate Prof Joyner of King's College, London. to American English
        test("Translate Prof Joyner of King's College, London. to American English", function done() {
            assert.equal(translator.britishToAmerican("Prof Joyner of King's College, London.")[0], `Prof. Joyner of King's College, London.`);
        })
        // Translate Tea time is usually around 4 or 4.30. to American English
        test("Translate Tea time is usually around 4 or 4.30. to American English", function done() {
            assert.equal(translator.britishToAmerican('Tea time is usually around 4 or 4.30.')[0], 'Tea time is usually around 4 or 4:30.');
        })


        // Highlight translation in Mangoes are my favorite fruit.
        test("Highlight translation in Mangoes are my favorite fruit.", function done() {
            assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.')[1], 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        })
        // Highlight translation in I ate yogurt for breakfast.
        test("Highlight translation in I ate yogurt for breakfast.", function done() {
            assert.equal(translator.americanToBritish('I ate yogurt for breakfast.')[1], 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        })
        // Highlight translation in We watched the footie match for a while.
        test("Highlight translation in We watched the footie match for a while.", function done() {
            assert.equal(translator.britishToAmerican('We watched the footie match for a while.')[1], 'We watched the <span class="highlight">soccer</span> match for a while.');
        })
        // Highlight translation in Paracetamol takes up to an hour to work.
        test("Highlight translation in Paracetamol takes up to an hour to work.", function done() {
            assert.equal(translator.britishToAmerican('Paracetamol takes up to an hour to work.')[1], '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        })


    })

});
