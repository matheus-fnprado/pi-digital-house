module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preco: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT
        },
        imagem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ativo: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        categoria_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false
       }
    }, {
       timestamps: false,
       tablename: 'produtos'
    })};