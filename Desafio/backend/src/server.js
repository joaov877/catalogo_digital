const app = require('./app');
const { initDatabase } = require('./config/database');

const PORT = process.env.PORT || 3001;

initDatabase()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
  console.error('Erro detalhado na inicializacao do banco:');
  console.error(err);
  console.error('Stack:', err.stack);
  process.exit(1);
  });

