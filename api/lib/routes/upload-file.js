'use strict';

const Fs = require('fs');
const Path = require('path');

const handleFileUpload = async (file) => {

    try {
        const uploadDir = Path.join(__dirname,'..','..', 'uploads');
        const fileExtn = file.hapi.filename.split('.').pop();
        const fileName = `${Date.now()}.${fileExtn}`;
        const data = file._data;
        await Fs.writeFileSync(`${uploadDir}/${fileName}`, data);

        return {
            filename: fileName,
            message: 'Upload successfully!'
        };
    }
    catch (e) {
        console.error(e.stack);
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
                const response = await handleFileUpload(payload.file);

                return response;
            }
        }
    }
];
