// logs.js에서는 module의 사용될 템플릿 역할을 하는 소스를 실제 nuxt 인스턴스에 삽입하는 과정을 한다.

const path = require('path')

module.exports = function (_moduleOpts) {
    const moduleOptions = Object.assign({}, this.options.log, _moduleOptions)

    this.addPlugin({
        src: path.resolve(__dirname, 'logs.template.js'),
        moduleOptions
    })
}

module.exports.meta = require('../../../package.json')