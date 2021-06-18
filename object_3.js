/*3 *) Create an object in which the key is the days of the week 
    from Monday to Friday (working days of the week)
    and the value is the number from 1-8 (hours of work),
    then from this object  create two arrays in the first to transfer all keys
    and in the second all values. And calculate total work hours.*/
    let obj={
        Monday:8,
        Tuesday:8,
        Wednesday:8,
        Thursday:8,
        Friday:8
    }
    let first_array_of_keys=Object.keys(obj);
    let second_array_of_values=Object.values(obj);
    console.log(first_array_of_keys);
    console.log(second_array_of_values);
    let result=second_array_of_values.reduce((sum, current) => sum + current, 0);
    console.log(result);