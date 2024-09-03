module.exports = function (sequelize, DataTypes, Model) {
    // SCHEMA
    const UserSchema = {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Email address already in use"
            },
            validate: {
                isEmail: {
                    msg: "Must be a valid email address"
                }
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    };

    // MODEL
    class UserModel extends Model { }
    UserModel.init(UserSchema, {
        sequelize,
        modelName: "user",
        freezeTableName: true
    });
    return UserModel;
}
