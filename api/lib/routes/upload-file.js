'use strict';

const Fs = require('fs');
const Path = require('path');
const Detect = require('../helpers/detect');

const handleFileUpload = async (file) => {

    try {
        const uploadDir = Path.join(__dirname,'..','..', 'uploads');
        const fileExtn = file.hapi.filename.split('.').pop();
        const fileName = `${Date.now()}.${fileExtn}`;
        const data = file._data;
        const filePath = `${uploadDir}/${fileName}`;
        await Fs.writeFileSync(filePath, data);

        return await Detect(fileName);
    }
    catch (e) {
        console.error(e.stack);
        return {};
    }
};

module.exports = [
    {
        method: 'POST',
        path: '/upload',
        options: {
            payload: {
                output: 'stream'
            },
            handler:  async (request, h) => {

                const { payload } = request;

                try {
                    const response =  await handleFileUpload(payload.file);

                    return h.response({
                        success: true,
                        text: response.text,
                        data: response.data
                    }).code(200);
                }
                catch (e) {

                    return  h.response({ success: false, message:` 😵 Something went wrong. 👾Suggestion: Please click a better quality photo!` }).code(400);
                }

            }
        }
    }
];
