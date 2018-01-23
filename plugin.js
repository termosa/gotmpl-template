function installPlugin (proto) {
  proto.myFunction = function () {
    console.log('work in progress')
  }
}

module.exports = { install: installPlguin }
