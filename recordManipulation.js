function studentRecordManipulate(obj, operation, prop, newValue) {
    if(operation === 'edit'){
        if(obj && obj.hasOwnProperty(prop)){
            obj[prop] = newValue;
            return obj;
        }else {
            return obj;
        }
    }
    else if(operation === 'delete'){
        if(obj && obj.hasOwnProperty(prop)){
            delete obj[prop];
        }
        return obj;
    }
}

const obj = {
    name:'John',
    lastName:'Bliss',
    city:'Florida'
}
//console.log(studentRecordManipulate(obj, "edit", "city","Dallas"));
//console.log(studentRecordManipulate(obj, "edit", "abc","Denton"));
console.log(studentRecordManipulate(obj, "delete", "city","Dallas"));

