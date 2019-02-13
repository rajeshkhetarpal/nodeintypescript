const fs = require("fs");
const https = require("https");
setImmediate(() => {
    console.log("setimmediate");
});
setTimeout(() => {
    console.log("settimeout");
}, 0);
const testasync = () => {
    return new Promise((resolve, reject) => {
        console.log("resolve");
        resolve("success");
    });
};
testasync();
//# sourceMappingURL=index.js.map