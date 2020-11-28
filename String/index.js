const StringModule = (() => {
    const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

    return {
        stripHTMLTags
    }
});

module.exports = StringModule();