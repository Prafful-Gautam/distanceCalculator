const fs = require('fs');
const path = require('path');

let rawData = fs.readFileSync(path.resolve(__dirname, 'mock.json'));
let data = JSON.parse(rawData);

exports.calculate = (req,res,next) => {
  var speed;
  if(data.id === req.body.id) {
    const time = (req.body.endTime - req.body.startTime)/3600000; //from user

    if(req.body.name === 'personB'){
      let mockTime = (data.B.endTime - data.B.startTime)/3600000; // from mock data
      this.speed = data.B.distance / mockTime;   //from mock data

      const distance = this.speed * time;      // acc. to mock data speed
      console.log(req.body.name+' ' + distance);
      res.status(200).json({distance:distance});
    } else
    {
    let mockTime = (data.A.endTime - data.A.startTime)/3600000; // from mock data
    this.speed = data.A.distance / mockTime;   //from mock data

    const distance = this.speed * time;      // acc. to mock data speed
    console.log('PersonA ' + distance);
    res.status(200).json({distance: distance})
    }
  }

}

exports.get = (req,res,next) => {
  res.status(200).send({data: data});
}
