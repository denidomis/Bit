const executeQuery = require("../mysql");
module.exports = class PC {
  #id;
  computer_owner;
  processor;
  graphics_card;
  ram_type;
  ram_speed;
  amount_of_ram;
  rental_history;
  computer_type;

  constructor(
    {
      computer_owner,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      rental_history,
      computer_type,
    },
    id = null
  ) {
    this.#id = id;
    this.computer_owner = computer_owner;
    this.processor = processor;
    this.graphics_card = graphics_card;
    this.ram_type = ram_type;
    this.ram_speed = ram_speed;
    this.amount_of_ram = amount_of_ram;
    this.rental_history = rental_history;
    this.computer_type = computer_type;
  }

  //   async update() {
  //     const result = await executeQuery(
  //       `UPDATE pc_for_rent SET salies_pavadinimas = ?, salies_trumpinys = ? WHERE id = ?`,
  //       [this.country, this.countryShort, this.#id]
  //     );
  //     return result;
  //   }

  get id() {
    return this.#id;
  }
  async save() {
    const result = await executeQuery(
      `INSERT INTO pc_for_rent (
        computer_owner, 
        processor,  
        graphics_card,
        ram_type,
        ram_speed,
        amount_of_ram,
        rental_history,
        computer_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        this.computer_owner,
        this.processor,
        this.graphics_card,
        this.ram_type,
        this.ram_speed,
        this.amount_of_ram,
        this.rental_history,
        this.computer_type,
      ]
    );
    this.#id = result[0].insertId;
  }
  static async findAll() {
    // const result = await executeQuery(`SELECT * FROM pc_for_rent`)[0]
    const results = await executeQuery(`SELECT * FROM pc_for_rent`);
    const result = results[0].map(
      (pc_for_rentObj) =>
        new PC(
          {
            computer_owner: pc_for_rentObj.computer_owner,
            processor: pc_for_rentObj.processor,
            graphics_card: pc_for_rentObj.graphics_card,
            ram_type: pc_for_rentObj.ram_type,
            ram_speed: pc_for_rentObj.ram_speed,
            amount_of_ram: pc_for_rentObj.amount_of_ram,
            rental_history: pc_for_rentObj.rental_history,
            computer_type: pc_for_rentObj.computer_type,
          },
          pc_for_rentObj.id
        )
    );

    return result;
  }
  static async findById(id) {
    const results = await executeQuery(`SELECT * FROM pc_for_rent WHERE id=?`, [
      id,
    ]);
    const result = results[0][0];
    return new PC(
      {
        computer_owner: result.computer_owner,
        processor: result.processor,
        graphics_card: result.graphics_card,
        ram_type: result.ram_type,
        ram_speed: result.ram_speed,
        amount_of_ram: result.amount_of_ram,
        rental_history: result.rental_history,
        computer_type: result.computer_type,
      },
      result.id
    );
  }
  static async deleteById(id) {
    const result = await executeQuery(`DELETE FROM pc_for_rent WHERE id=?;`, [
      id,
    ]);
    if (result[0].affectedRows === 0) throw new Error("not found");
    return result;
  }
  getInstance() {
    return { ...this, id: this.#id };
  }
};
