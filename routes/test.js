var router = require('express').Router()
var wechat = require('wechat')

router.use('/', wechat(config)
  .text((msg, req, res) => {
    res.reply('回复文本消息')
  })
  .image((msg, req, res) => {
    res.reply('回复图片消息')
  })
  .voice((msg, req, res) => {
    res.reply('回复语音消息')
  })
  .video((msg, req, res) => {
    res.reply('回复视频消息')
  })
  .location((msg, req, res) => {
    res.reply('回复地理位置消息')
  })
  .event((msg, req, res) => {
    res.reply('回复事件消息')
  })
  .device_text((msg, req, res) => {
    res.reply('回复设备文本消息')
  })
  .device_event((msg, req, res) => {
    res.reply('回复设备事件消息')
  })
  .middlewarify()
)

module.exports = router;