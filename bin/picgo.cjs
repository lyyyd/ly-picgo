// #!/usr/bin/env node
const path = require('path')
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))
let configPath = argv.c || argv.config || ''
if (configPath !== true && configPath !== '') {
  configPath = path.resolve(configPath)
} else {
  configPath = ''
}
const { PicGo } = require('..')
const picgo = new PicGo(configPath)
picgo.upload(['../img/1.jpg', '../img/2.jpg']).then(res => {
  console.log('上传结果res', res)
})
