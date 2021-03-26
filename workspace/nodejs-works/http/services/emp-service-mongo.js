const mc = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;


const url = "mongodb://localhost"
const dbName = "sapdb"
const collection = "emps"

// helper function 

function getEmpCollection(callback) {
    mc.connect(url,(err, client) => {
        if(err) {
            callback(err);
            return; 
        }

        const db = client.db(dbName);
        const empsCollection = db.collection(collection); 
        callback(null, client, empsCollection)
    })
}

class EmployeeService {
 
    addEmployee(employee) {
         
        return new Promise((resolve, reject) => {
            'use strict'
            if (!employee || typeof employee != 'object') {
                let err ={}; 
                err.code = 1001;
                err.message ="Employee was not supplied or was not an object"
                reject(err)
                return
            }

            const requiredFields = ['name', 'email', 'phone', 'city']
            const missingFields =[]; 

            requiredFields.forEach(function(field) {
                if(!(field in employee)) {
                    missingFields.push(field)
                }
            })
            if(missingFields.length !=0) {
                let err ={}; 
                err.code = 1002;
                err.message ="Some fields are missing please corred " + missingFields.join()
                reject(err)
                return
            }

            getEmpCollection((err, client, empsCollection) => {
                if(err) {
                    reject(err);
                    return; 
                }

                empsCollection.insertOne(employee, (err, doc) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(doc.insertedId)
                    }
                    client.close(); 
                })

            })
        })
    }


    /*getAllEmployees() {}
    updateEmployee(employee) {}
    getEmployee(empId) {}
    deleteEmployee(empId) {}
*/
}


module.exports = EmployeeService; 



















