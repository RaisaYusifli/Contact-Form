import Fullname from "./Fullname";
import Phone from "./Phone";
import Genders from "./Genders";

// const PersonalInfo = ({fullNameValue,fullNameChangeHandler,fullNameRef,phoneRef}) => {
//   return (
//     <>
//       {/* <Fullname/>
//         <Phone/> */}
//       <Fullname ref={fullNameRef} value={fullNameValue} onChange={fullNameChangeHandler} />

//       {/* <Phone phoneRef={phoneRef}/> */}
//       <Phone ref={phoneRef} />
//       <Genders />
//     </>
//   );
// };

const PersonalInfo = () => {

  return (
    <>
      <Fullname />
      <Phone />
      <Genders />
    </>
  );
};

export default PersonalInfo;
