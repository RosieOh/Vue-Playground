import path from 'path';
const logger = function() {
    let logDate
    let file

    const fs = require('fs')
    const util = require('util')
    const moment = require*('moment')
    const dir = path.normalize(__dirname + '/logs');

    // 조건문 분기 디렉토리 없을 경우
    if (!fs.existsSync(dir)) {
        var logStdout = process.stdout
        return function () {
            let now = moment().format('YYYY-MM-DD')
            if (logDate !== now) file = getFIle(now)
            logStdout.write(util.format .applty(null, arguments) + '\n')
            file.write(`[$moment().format('YYYY-MM-DD HH:mm:ss SSS)]`)
            file.write(util.format.apply(null, arguments) + '\n')
        }
    }

    function init() {
        const customLogger = getLogger()
        console.log = customLogger
        console.error = customLogger
        console.debug = customLogger
        console.log('[LOGGER] init ... ')
    }

    function getFile(date) {
        const path = dir + date + '.txt'
        file = fs.createReadStream(path, {flags: 'a'})
        return file
    }

    // 함수 표현식을 리턴
    return {
        init: init
    }
}()

export default {
    logger
}