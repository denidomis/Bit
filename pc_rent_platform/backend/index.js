const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "dode",
  password: "dode1234",
  database: "pc_rent_platform",
});

connection.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("Connected to database!");
    executeStatement();
  }
});

async function executeStatement() {
  // READ
  // const [result] = await connection
  //   .promise()
  //   .execute("SELECT * FROM `addresses` WHERE `id` = 1");
  // console.log(result);
  // CREATE
  // const result = await connection.promise().execute(
  //   `INSERT INTO users (username, pass_encoded, email, birth_date, phone, address_id)
  //           VALUES("DoDE", "$2a$12$Bez77LDBLbpFt6wbGM6wJ.AkiTfXw5tn5Qo2yp6tau922l854MgpK", "dodedode@gmail.com", "2001-10-31", "+37069146433", 2)`
  // );
  // console.log(result);
  // UPDATE
  // const result = await connection.promise().execute(`
  // UPDATE users SET username = 'Justelio20', email = 'krutikovasjustinas@justinas.lt' WHERE id=4;
  // `);
  // console.log(result);
  //   // DELETE
  //   const result = await connection.promise().execute(`
  // 	DELETE FROM users WHERE id=5;
  // 	 `);
  //   console.log(result);
}
