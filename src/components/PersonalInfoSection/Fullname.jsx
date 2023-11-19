// import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
// import { useContact } from "../hooks";
// const Fullname=forwardRef(({value,onChange},ref)=>{

// const Fullname = () => {
//   const { fullName, setFullName } = useContact();

//   return (
//     <div className={style["flex--item"]}>
//       <label htmlFor="fullname">Fullname:</label>
//       <input
//         value={fullName.value}
//         style={{borderColor: fullName.error ? 'red' : 'green'}}
//         onChange={(e) => {
//           // setFullName(e.target.value);
//           setFullName((prevState) => ({
//             ...prevState,
//             value: e.target.value,
//             error: false,
//           }));
//         }}
//         // ref={ref}
//         onBlur={() => {
//           if (!fullName.value.trim().length) {
//             setFullName((prevState)=>({...prevState,error:"This field is required!"}))
//           }
//         }}
//         name="fullname"
//         type="text"
//         id="fullname"
//       />
//       {fullName.error && <div style={{color:'red'}}>{fullName.error}</div>}
//     </div>
//   );
// };
import "../Contact.css";

const Fullname = () => {
  const methods = useFormContext();
  console.log("ajndjasd---", methods.formState.errors);
  return (
    <div className="form--item">
      <label htmlFor="name">Name:</label>
      <Controller
        control={methods.control}
        name="fullname.name"
        rules={{
          required: "This field is required!",
          // pattern:{
          //   value:/[A-Z]$/,
          //   message:"Patterne uygun deyil!"
          // },
          // validate:(value)=>{
          //   return !value.includes("Raisa") && "The value should contain Raisa!"
          // }
        }}
        // render={({field:{onBlur, onChange, value}}) => {
        render={({ field }) => {
           return <input
            {...field} // onChange, value, onBlur
            type="text"
            id="name"
          />;
        }}
      />
      {methods.formState.errors?.fullname?.name && (
        // The use of the optional chaining operator (?.) ensures that if errors, fullname, or name is undefined at any level, the code won't throw an error.
        <div className="form-error">
          {methods.formState.errors?.fullname?.name?.message}
        </div>
      )}
      <label htmlFor="surname">Surname:</label>
      <Controller
        control={methods.control}
        name="fullname.surname"
        rules={{
          required: "This field is required!",
          // pattern:{
          //   value:/[A-Z]$/,
          //   message:"Patterne uygun deyil!"
          // },
          // validate:(value)=>{
          //   return !value.includes("Yusifli") && "The value should contain Yusifli!"
          // }
        }}
        // render={({field:{onBlur, onChange, value}}) => {
        render={({ field }) => {
          return <input
            {...field} // onChange, value, onBlur
            type="text"
            id="surname"
          />;
        }}
      />
      {methods.formState.errors?.fullname?.surname && (
        <div className="form-error">
          {methods.formState.errors?.fullname?.surname?.message}
        </div>
      )}
    </div>
  );
};

export default Fullname;
