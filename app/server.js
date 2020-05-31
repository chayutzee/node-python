const express = require('express')
const { PythonShell } = require('python-shell')

const app = express()
const options = {
  mode: 'text',
  pythonPath: '/usr/bin/python',
  pythonOptions: ['-u'],
  // make sure you use an absolute path for scriptPath
  scriptPath: '/opt/web/python-script'
  // args: [args]
}
app.get('/test', (req, res, next) => {
  PythonShell.run('hello.py', options, function (err, results) {
    if (err) throw err
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results)
    return res.send(results)
  })
  // return res.send(results)
})

app.listen(3000, (err) => {
  if (err) {
    console.error('😡 Error :', err)
  }
  console.log('🚀 🚀 server running at:', 3000)
})
