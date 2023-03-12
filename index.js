const employee = {
    name: "Sam",
    streetAdress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(driver, key){
    const NEW_OBJ = Object.assign({}, employee);
    delete NEW_OBJ[key];
    return NEW_OBJ;
}
function destructivelyDeleteFromEmployeeByKey(driver, key){
     Object.assign({}, driver);
     delete driver[key];
     return driver;
}