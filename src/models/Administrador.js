module.exports = (sequelize, DataTypes) => {
  const Administrador = sequelize.define(
    "Administrador",
    {
      id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "administradores"
    }
  );
  return Administrador;
};
