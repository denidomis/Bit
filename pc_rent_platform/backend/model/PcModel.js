const executeQuery = require("../mysql");

module.exports = class PC {
  #id;
  pc_name;
  computer_owner;
  processor;
  graphics_card;
  ram_type;
  ram_speed;
  amount_of_ram;
  computer_type;
  pc_image;

  constructor(
    {
      pc_name,
      computer_owner,
      processor,
      graphics_card,
      ram_type,
      ram_speed,
      amount_of_ram,
      computer_type,
      pc_image,
    },
    id = null
  ) {
    this.#id = id;
    this.pc_name = pc_name;
    this.computer_owner = computer_owner;
    this.processor = processor;
    this.graphics_card = graphics_card;
    this.ram_type = ram_type;
    this.ram_speed = ram_speed;
    this.amount_of_ram = amount_of_ram;
    this.computer_type = computer_type;
    this.pc_image = pc_image;
  }

  async update() {
    const result = await executeQuery(
      `UPDATE pc_for_rent SET 
      pc_name = ?,
      computer_owner = ?,
      processor = ?,
      graphics_card = ?,
      ram_type = ?,
      ram_speed = ?,
      amount_of_ram = ?,
      computer_type = ?,
      pc_image =? 
      WHERE id = ?`,
      [
        this.pc_name,
        this.computer_owner,
        this.processor,
        this.graphics_card,
        this.ram_type,
        this.ram_speed,
        this.amount_of_ram,
        this.computer_type,
        this.pc_image,
        this.#id,
      ]
    );
    return result;
  }

  get id() {
    return this.#id;
  }

  async save() {
    const result = await executeQuery(
      `INSERT INTO pc_for_rent (
        pc_name,
        computer_owner, 
        processor,  
        graphics_card,
        ram_type,
        ram_speed,
        amount_of_ram,
        computer_type,
        pc_image
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        this.pc_name,
        this.computer_owner,
        this.processor,
        this.graphics_card,
        this.ram_type,
        this.ram_speed,
        this.amount_of_ram,
        this.computer_type,
        this.pc_image,
      ]
    );
    this.#id = result[0].insertId;
    return result;
  }

  static async findAll() {
    const results = await executeQuery(`SELECT * FROM pc_for_rent`);
    const result = results[0].map(
      (pc_for_rentObj) =>
        new PC(
          {
            pc_name: pc_for_rentObj.pc_name,
            computer_owner: pc_for_rentObj.computer_owner,
            processor: pc_for_rentObj.processor,
            graphics_card: pc_for_rentObj.graphics_card,
            ram_type: pc_for_rentObj.ram_type,
            ram_speed: pc_for_rentObj.ram_speed,
            amount_of_ram: pc_for_rentObj.amount_of_ram,
            computer_type: pc_for_rentObj.computer_type,
            pc_image: pc_for_rentObj.pc_image,
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
    const pc_for_rent = results[0];
    return new PC(
      {
        pc_name: pc_for_rent.pc_name,
        computer_owner: pc_for_rent.computer_owner,
        processor: pc_for_rent.processor,
        graphics_card: pc_for_rent.graphics_card,
        ram_type: pc_for_rent.ram_type,
        ram_speed: pc_for_rent.ram_speed,
        amount_of_ram: pc_for_rent.amount_of_ram,
        computer_type: pc_for_rent.computer_type,
        pc_image: pc_for_rent.pc_image,
      },
      pc_for_rent.id
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
