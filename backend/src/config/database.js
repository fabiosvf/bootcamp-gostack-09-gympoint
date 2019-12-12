module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // process.env.DB_HOST,
  username: 'postgres', // process.env.DB_USER,
  password: 'docker', // process.env.DB_PASS,
  database: 'gympoint', // process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
