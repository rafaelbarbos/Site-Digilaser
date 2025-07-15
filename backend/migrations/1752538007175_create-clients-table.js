exports.up = (pgm) => {
  pgm.createTable('clients', {
    id: 'id',
    name: { type: 'varchar(255)', notNull: true },
    phone: { type: 'varchar(20)', notNull: true },
    email: { type: 'varchar(255)', unique: true },
    address: { type: 'text' },
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('clients');
};