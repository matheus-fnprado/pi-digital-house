module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
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
      preco: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
      },
      imagem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      categoria_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "produtos"
    }
  );
  Produto.associate = (models) =>{
    Produto.belongsTo(models.Categoria, { foreignKey: 'categoria_id', as: 'categoria'} )
  }
  return Produto;
};
