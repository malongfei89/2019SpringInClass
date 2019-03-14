const conn = require('./mysql_connection');
const model = {
  getAll(cb){
     conn.query("SELECT * FROM forexercise.2019spring_persons", (err, data) => {
      cb(err, data);
    });
  },
  get(id, cb){
    conn.query("SELECT * FROM forexercise.2019spring_persons WHERE id = ?", id, (err, data) => {
      cb(err, data);
    })
  },
  add(input, cb){
    conn.query("INSERT INTO forexercise.2019spring_persons (first_name, last_name, Birthday, created_at) VALUES(?)",
               [[input.first_name, input.last_name, input.Birthday, new Date()]],
               (err, data) => {
                 cb(err, data);
               });
  }
};
module.exports = model;
