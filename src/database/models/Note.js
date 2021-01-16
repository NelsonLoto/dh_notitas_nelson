module.exports = function(sequelize, DataTypes) {
    let alias = "Note";
    let cols = {
        id_note: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: 'notes',
        timestamps: false
    };
    const Nota = sequelize.define(alias, cols, config);
    return Nota;
};