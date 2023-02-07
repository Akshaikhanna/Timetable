const { sequelize } = require('../employeeDB'); 
 const { DataTypes, Model } = sequelize; 
  
 class PushNotificationTokens extends Model {}; 
  
 PushNotificationTokens.init({ 
 user_id: { 
    type: DataTypes.subject_id, 
    primaryKey: true, 
 }, 

 token: { 
    type: DataTypes.day_name, 
    allowNull: false, 
    primaryKey: true, 
 }, 
 
 value: { 
    type: DataTypes.period, 
    defaultValue: {}, 
    allowNull: false, 
 }, 
 is_active: { 
    type: DataTypes.ENUM('active', 'inactive'), 
    allowNull: false, 
 }, 
 },{ 
 timestamps: true, 
 createdAt: 'created_at', 
 updatedAt: 'updated_at', 
 // Other model options go here 
 sequelize: global.db.sequelizeConfig, // We need to pass the connection instance 
 modelName: 'push_notification_tokens', // We need to choose the model name, 
 indexes: [], 
     defaultScope: { 
     where: { 
     is_active: 'active', 
 }, 
 }, 
 scopes: {}, 
//  hooks : { 
//     beforeCreate : (record, options) => { 
//         console.log('beforeCreate', record.dataValues) 
//     }, 
//     beforeUpdate : (record, options) => { 
//         console.log('beforeUpdate', record.dataValues) 
//     }, 
//     afterCreate : async (record, options) => { 
//         console.log('afterCreate', record.dataValues) 
//     }, 
//     afterUpdate : (record, options) => { 
//          console.log('afterUpdate', record.dataValues) 
//     } 
//  }, 
 }); 
  
 // PushNotificationTokens.removeAttribute('id'); 
  
 global.db.models.PushNotificationTokens = PushNotificationTokens; 
 module.exports = PushNotificationTokens;