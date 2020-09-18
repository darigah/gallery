var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://dariga:<dariga>@cluster0.vwkdg.mongodb.net/<darkroom>?retryWrites=true&w=majority',
    development: 'mongodb+srv://dariga:<dariga>@cluster0.vwkdg.mongodb.net/<darkroom>?retryWrites=true&w=majority',
    test: 'mongodb+srv://dariga:<dariga>@cluster0.vwkdg.mongodb.net/<darkroom>?retryWrites=true&w=majority',
}
module.exports = config;
