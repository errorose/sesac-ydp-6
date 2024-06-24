const Visitor = require('../model/Visitor');

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitors => localhost:PORT/visitors
exports.getVisitors = (req, res) => {
  // console.log(Visitor); // { getVisitors: [Function (anonymous)] }
  // console.log(Visitor.getVisitors); // [Function (anonymous)]

  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // getVisitors() 함수 호출
  Visitor.getVisitors((result) => {
    // result 매개변수
    // : model/Visitor.js getVisitors함수의 callback(rows)의 "rows" 변수에 대응
  
    console.log('controller/CVisitor.js >> ', result);
    
    res.render('visitor', {data: result});
  })
};

exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    // result: rows.insertId
    console.log('controller/CVisitor.js >> ', result);
    // controller/CVisitor.js >>  4

    res.send({
      id: result, 
      name: req.body.name, 
      comment: req.body.comment})
  });
}