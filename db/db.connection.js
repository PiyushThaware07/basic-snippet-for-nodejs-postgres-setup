const config = require("./db.config");
const { Sequelize } = require('sequelize');
const cliProgress = require('cli-progress');

// Create Sequelize
let sequelize = new Sequelize(config["development"]);

// Testing Connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('~> Database connected successfully');

        // Get all models
        const models = sequelize.modelManager.models;
        const totalModels = models.length;

        if (totalModels > 0) {
            console.log("development syncing...");
            // Initialize the progress bar
            const progressBar = new cliProgress.SingleBar({
                format: 'Progress |' + '{bar}' + '| {percentage}% || {value}/{total} Models Synced',
                barCompleteChar: '\u2588',
                barIncompleteChar: '\u2591',
                hideCursor: true
            });
            progressBar.start(totalModels, 0);

            for (let i = 0; i < totalModels; i++) {
                await models[i].sync({ alter: true });
                progressBar.increment();
            }

            progressBar.stop();
            console.log('~> Models synchronized successfully');
        } else {
            console.log('~> No models found to synchronize');
        }
    } catch (error) {
        console.error('~> Database connection failed : ', error.message);
    }
})();

module.exports = sequelize;
