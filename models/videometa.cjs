// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database.cjs')
  
// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const videoandmeta = sequelize.define('videoandmeta', {
  
    // Column-1, user_id is an object with 
    // properties like type, keys, 
    // validation of column.
    id:{
        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,
        // To increment user_id automatically.
        autoIncrement:true,
        // user_id can not be null.
        allowNull:false,
        // For uniquely identify user.
        primaryKey:true
    },
  
    // Column-2, name
    hashvideo: { type: Sequelize.STRING, allowNull:false },
  
    // Column-3, email
    hashmeta: { type: Sequelize.STRING, allowNull:false },

    hashthumbnail: { type: Sequelize.STRING, allownull:false },

    isgig: {type: Sequelize.BOOLEAN},
  
    // Column-4, default values for
    // dates => current time
    wallet: { type: Sequelize.STRING, allowNull:false },
    title: { type: Sequelize.STRING, allowNull:false },
    description: { type: Sequelize.TEXT('long'), allowNull:false },
    myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
     // Timestamps
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
}, {
    indexes: [
      // add a FULLTEXT index
      { type: 'FULLTEXT', name: 'videoandmeta', fields: ['hashvideo','hashmeta','wallet','title','description','hashthumbnail'] }
    ]
  })

  
// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = videoandmeta
