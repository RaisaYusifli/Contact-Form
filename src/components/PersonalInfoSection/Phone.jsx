// import { forwardRef } from 'react';
import {useFormContext } from "react-hook-form";
import '../Contact.css';
// import { useContact } from '../hooks';

// const Phone=({phoneRef})=>{
//     return(
//         <div className={style["flex--item"]}>
//           <label htmlFor="phone">Phone Number</label>
//           <input ref={phoneRef} name="phone" type="tel" id="phone" />
//         </div>
//     )
// }
// const Phone=forwardRef((_,ref)=>{
//     return(
//         <div className={style["flex--item"]}>
//           <label htmlFor="phone">Phone Number</label>
//           <input ref={ref} name="phone" type="tel" id="phone" />
//         </div>
//     )
// })

// const Phone=(()=>{
//   const {phone,setPhone}=useContact;
//     return(
//         <div className={style["flex--item"]}>
//           <label htmlFor="phone">Phone Number</label>
//           <input value={phone} onChange={e=>setPhone(e.target.value)} name="phone" type="tel" id="phone" />
//         </div>
//     )
// })
const Phone = () => {
  const methods = useFormContext();
  return (
    <div className="form--item">
      <label htmlFor="phone">Phone Number</label>
      <input {...methods.register("phone")} type="tel" id="phone" />
      {/* <Controller
        name="phone"
        control={methods.control}
        render={({ field }) => {
          <input {...field} type="tel" id="phone" />;
        }}
      /> */}
    </div>
  );
};

export default Phone;
