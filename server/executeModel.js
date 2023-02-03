

const { exec } = require("child_process");

const executeModel = () => {

    return new Promise((resolve, reject) => {
        exec(
            `python3 ../predictor/insights.py uploads/audioFile-1675449001988.wav`,
            (error, stdout, stderr) => {
                error && reject({ error, stderr });
                stderr && reject(stderr);
                console.log(stdout);
                resolve(stdout);
            }
        );
    });
};

module.exports = executeModel