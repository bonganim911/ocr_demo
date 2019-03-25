'use strict';

// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');
const Path = require('path');
const Fs = require('fs');

const Helpers = require('../helpers')();



// Read a local image as a text document

const detect = async (fileName) => {
    // Creates a client
    const VisionClient = new Vision.ImageAnnotatorClient();
    const uploadDir = Path.join(__dirname,'..','..', 'uploads');
    const file = `${uploadDir}/${fileName}`;

    if (!Fs.existsSync(file)) {
        throw new Error('File does not exists');
    }

    const [result] = await VisionClient.documentTextDetection(file);

    const fullTextAnnotation = result.fullTextAnnotation;

    console.log(`Full text: ${fullTextAnnotation.text}`);
    const spillted = fullTextAnnotation.text && fullTextAnnotation.text.split('\n');
    spillted.forEach((e, i) => {

        console.log(`${e} :  ${i}`);
    });

    return {
        filePath: file,
        text: fullTextAnnotation.text,
        data: Helpers.prepareResponse(spillted)
    };

};

module.exports = detect;
