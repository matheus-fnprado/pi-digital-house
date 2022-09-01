module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    "Categoria",
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
    },
    {
      timestamps: false,
      tableName: "categorias"
    }
  );
  Categoria.associate = (models) =>{
    Categoria.hasMany(models.Produto, { foreignKey: 'categoria_id', as: 'produto'} )
  }

  return Categoria;
};
