module.exports = (word) => word.replace(/(\w{2,})\1($|\W+)/, "$1$2");
