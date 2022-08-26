module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_valor: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "pedidos"
    }
  );
  return Pedido;
};
