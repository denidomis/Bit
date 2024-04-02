const mysql = require("mysql2");
const env = require("env");

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

connection.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("Connected to database!");
    // executeStatement();
  }
});

async function execute(sql, parameters = []) {
  try {
    const result = await connection.promise().execute(sql, parameters);
    return result;
  } catch (err) {
    console.log(`Error executing query ${sql}, Error: ${err} `);
  }
}

module.exports = execute;

// async function executeStatement() {
// READ
// const [result] = await connection
// 	.promise()
// 	.execute("SELECT * FROM `addresses` WHERE `id` = 1");
// console.log(result);

// CREATE

// const result = await connection.promise().execute(
// 	`INSERT INTO users (username, pass_encoded, email, birth_date, phone, address_id)
//         VALUES("Justinas", "HSDGHASKSKthtrsdhz6dfh846erhERH", "krutikovasjustinas@gmail.com", "1999-11-11", "+3706584069", 1)`
// );
// console.log(result);

// UPDATE
// const result = await connection.promise().execute(`
// UPDATE users SET username = 'Justelio20', email = 'krutikovasjustinas@justinas.lt' WHERE id=4;
// `);
// console.log(result);

// DELETE
// 	const result = await connection.promise().execute(`
// 	DELETE FROM users WHERE id=5;
// 	 `);
// 	console.log(result);
// }
