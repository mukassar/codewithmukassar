export const validation=(values)=>{
    console.log("====>",values);
  let errors={}
  if(!values.username){
    errors.username="Please Enter Username";
  } else if(( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username))){
  errors.username="Enter Valid Email";
  }

  if(!values.password){
    errors.password="Please Enter Password";
  }else if (values.password.length<3 && values.password.length>10){
    errors.password="Password Must be Min 3 Characters";
  }else if(values.password.length>10){
    errors.password="Password Max Should be 10 Characters";
  }
  return errors;
}
