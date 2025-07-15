exports.up = (pgm) => {
  pgm.createTable('appointments', {
    id: 'id',
    client_id: {
      type: 'integer',
      notNull: true,
      references: 'clients', // Referencia a tabela 'clients'
      onDelete: 'CASCADE', // Se o cliente for deletado, os agendamentos dele também são
    },
    service_date: { type: 'date', notNull: true },
    service_time: { type: 'time', notNull: true },
    description: { type: 'text' },
    status: { type: 'varchar(50)', notNull: true, default: 'pending' }, // Ex: 'pending', 'confirmed', 'completed', 'cancelled'
    created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('appointments');
};