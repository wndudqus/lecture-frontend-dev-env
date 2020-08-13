module.exports = function myWebpackLoader(content) {
    console.log('loader가 동작함');
    return content.replace('console.log(', "alert(");
}