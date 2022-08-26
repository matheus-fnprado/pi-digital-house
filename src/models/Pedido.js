module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        data: {
            type: DataTypes.TIMESTAMP,
            allowNull: false
        }
    }, {
        timestamps: true,
        tableName: 'pedidos'
    });
    return Pedido;
};