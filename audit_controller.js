const database_connector = require('database_connector');

exports.getAudit = function(user){
    if (user["nickname"] == "admin"){
        return database_connector.getAuditLogs();
    }
    return false;
};