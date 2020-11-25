var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cmpt470",
  database: "cmpt470"
});



var rectModel = {
  save: function (data, res) {
    var sql = "INSERT INTO rectangles (height, width, colour) VALUES ('" + data.body.height + "','" + data.body.width + "' , '" + data.body.colour + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.redirect("/");
    });
  },
  update: function (data, res) {
    var sql = "UPDATE rectangles SET height='" + data.body.height + "', width='" + data.body.width + "', colour='" + data.body.colour + "' WHERE id='" + data.params.id + "'"
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");
      res.redirect("/rects/view");
    });
  },
  getAll: function (callback) {
    con.query("SELECT * FROM rectangles", function (err, result, fields) {
      if (err) throw err;
      return callback(result);
    });
  },
  getOne: function (id, callback) {
    con.query("SELECT * FROM rectangles where id = " + id, function (err, result, fields) {
      if (err) throw err;
      return callback(result);
    });
  },
  delete: function (data, res) {
    console.log("DELETE");
    var sql = "DELETE from rectangles WHERE id='" + data.params.id + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
      res.redirect("/rects/view");
    });
  },
}
module.exports = rectModel;