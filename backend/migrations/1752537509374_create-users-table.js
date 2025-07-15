exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'id', // Atalho para SERIAL PRIMARY KEY
    username: { type: 'varchar(255)', notNull: true, unique: true },
    password_hash: { type: 'varchar(255)', notNull: true }, // Armazenaremos o hash da senha
    role: { type: 'varchar(50)', notNull: true, default: 'admin' }, // Ex: 'admin', 'technician'
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};