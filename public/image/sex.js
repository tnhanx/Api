exports.name = '/images/sex';
exports.index = async(req, res, next) => {
    try {
        const sex = require('./data/json/sex.json');
        var image = sex[Math.floor(Math.random() * sex.length)].trim();
        res.jsonp({
            url: image,
            count: sex.length,
            author: 'tnhan'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}