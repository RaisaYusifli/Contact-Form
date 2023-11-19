// import {  useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Details } from "./DetailsSection";
import PersonalInfo from "./PersonalInfoSection";
// import {ContactContext} from './hooks'
import { DevTool } from "@hookform/devtools";
import "./Contact.css";
import React from "react";
import { API_URL } from "../const";

export function Contact() {
  // const fileRef = useRef();
  // const fullNameRef = useRef(null);
  // const phoneRef = useRef(null);
  // const data = useRef(null);

  // const [file, setFile] = useState();
  // const [fullName, setFullName] = useState({
  //   value:"",
  //   error:null,

  // });
  // const [phone, setPhone] = useState("");

  // console.log("Contact");

  const fetchInitialData = async () => {
    const res = await fetch(API_URL).then(data=>data.json()).catch(error=>console.log(error));
    // const data = await res.json();
    return res;
  };

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchInitialData();
  //     console.log(data);
  //   }
  //   fetchData();
  //   // console.log(fetchInitialData());
  // }, []);
  
  const methods = useForm({
    mode: "all",
    // defaultValues: {
    //   fullname: {
    //     name: "",
    //     surname: "",
    //   },
    //   phone: "",
    //   texts: [""],
    //   // gender:"male"
    // },
    defaultValues: async () => {
      return await fetchInitialData();
    },
    
  });

  const formHandler = methods.handleSubmit(async (values) => {
    // const form=new FormData(e.target);
    // for(const[key,value] of form){
    //     console.log(`${key}: ${value}\n`)
    // }

    // console.log(fullNameRef.current.value); //input ozun qaytaracaq value'suz
    // console.log(fileRef.current.files[0]); //formda file i aldiq
    // console.log(fullName,phone);
    // e.preventDefault();

    try {
      console.log("-------", values);
      console.log("Form handleSubmit");

      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }
  });

  // const uploaderCliclHandler = () => {
  //   fileRef.current.click();
  // };

  // const uploaderChangeHandler = (e) => {
  //   setFile(e.target.files[0]);
  //   console.log(data.current);
  // };

  // useEffect(() => {
  //   phoneRef.current.focus();
  //   data.current = "eli";
  // }, []);

  return (
    // <ContactContext.Provider
    //   value={{
    //     fullName,
    //     setFullName,
    //     phone,
    //     setPhone
    //   }}
    // >
    //   <h1>Contact Form</h1>
    //   <form onSubmit={formHandler} className={style.form}>
    //     {/* <PersonalInfo
    //       fullNameValue={fullName}
    //       fullNameChangeHandler={setFullName}
    //       fullNameRef={fullNameRef}
    //       phoneRef={phoneRef}
    //     /> */}
    //     <PersonalInfo />

    //     <div className={style["flex--item"]}>
    //       <label htmlFor="file">File</label>
    //       <div onClick={uploaderCliclHandler} className={style.uploader}>
    //         <svg
    //           className={style["uploader-icon"]}
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="86"
    //           height="94"
    //           viewBox="0 0 86 94"
    //           fill="none"
    //         >
    //           <path
    //             d="M47.1536 3.75171H48.3316C62.4185 3.75171 69.4619 3.75171 74.3533 7.19798C75.7548 8.18539 76.999 9.3564 78.0481 10.6754C81.7098 15.2791 81.7098 21.9082 81.7098 35.1664V46.1616C81.7098 58.9611 81.7098 65.3609 79.6842 70.4722C76.4278 78.6894 69.5411 85.171 60.8104 88.2358C55.3796 90.1422 48.5798 90.1422 34.9804 90.1422C27.2092 90.1422 23.3237 90.1422 20.2204 89.0529C15.2314 87.3015 11.2961 83.5977 9.43531 78.9022C8.27783 75.9815 8.27783 72.3245 8.27783 65.0105V46.947"
    //             stroke="#3276E8"
    //             strokeWidth="6.91124"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M81.7099 46.9465C81.7099 54.8986 75.2635 61.345 67.3115 61.345C64.4356 61.345 61.0451 60.841 58.249 61.5903C55.7646 62.256 53.8241 64.1965 53.1584 66.6809C52.4092 69.477 52.9131 72.8675 52.9131 75.7434C52.9131 83.6954 46.4667 90.1418 38.5146 90.1418"
    //             stroke="#3276E8"
    //             strokeWidth="6.91124"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M38.5147 21.0298L3.9585 21.0298M21.2366 3.75171V38.3079"
    //             stroke="#3276E8"
    //             strokeWidth="6.91124"
    //             strokeLinecap="round"
    //           />
    //         </svg>
    //         Click to upload
    //       </div>
    //       {file && <span>{file.name}</span>}
    //       <input
    //         onChange={uploaderChangeHandler}
    //         ref={fileRef}
    //         name="file"
    //         type="file"
    //         id="file"
    //         className={style.file}
    //         accept=".png,.jpg"
    //       />
    //     </div>

    //     <div className={style["flex--item"]}>
    //       <label htmlFor="priority">Priorarity</label>
    //       <select name="priority" id="priority">
    //         <option value="high">High</option>
    //         <option value="medium">Medium</option>
    //         <option value="low">Low</option>
    //       </select>
    //     </div>

    //     <div className={style["flex--item"]}>
    //       <label htmlFor="message">Text</label>
    //       <textarea name="message" id="message" cols="30" rows="10"></textarea>
    //     </div>

    //     <input type="submit" value="submit" />
    //   </form>
    // </ContactContext.Provider>

    //react hook form
    <FormProvider {...methods}>
      <h1>Contact Form</h1>
      <form onSubmit={formHandler} className="form">
        {/* <PersonalInfo
          fullNameValue={fullName}
          fullNameChangeHandler={setFullName}
          fullNameRef={fullNameRef}
          phoneRef={phoneRef}
        /> */}
        <PersonalInfo />
        <Details />

        {/* <div className={style["flex--item"]}>
          <label htmlFor="file">File</label>
          <div onClick={uploaderCliclHandler} className={style.uploader}>
            <svg
              className={style["uploader-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="94"
              viewBox="0 0 86 94"
              fill="none"
            >
              <path
                d="M47.1536 3.75171H48.3316C62.4185 3.75171 69.4619 3.75171 74.3533 7.19798C75.7548 8.18539 76.999 9.3564 78.0481 10.6754C81.7098 15.2791 81.7098 21.9082 81.7098 35.1664V46.1616C81.7098 58.9611 81.7098 65.3609 79.6842 70.4722C76.4278 78.6894 69.5411 85.171 60.8104 88.2358C55.3796 90.1422 48.5798 90.1422 34.9804 90.1422C27.2092 90.1422 23.3237 90.1422 20.2204 89.0529C15.2314 87.3015 11.2961 83.5977 9.43531 78.9022C8.27783 75.9815 8.27783 72.3245 8.27783 65.0105V46.947"
                stroke="#3276E8"
                strokeWidth="6.91124"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81.7099 46.9465C81.7099 54.8986 75.2635 61.345 67.3115 61.345C64.4356 61.345 61.0451 60.841 58.249 61.5903C55.7646 62.256 53.8241 64.1965 53.1584 66.6809C52.4092 69.477 52.9131 72.8675 52.9131 75.7434C52.9131 83.6954 46.4667 90.1418 38.5146 90.1418"
                stroke="#3276E8"
                strokeWidth="6.91124"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M38.5147 21.0298L3.9585 21.0298M21.2366 3.75171V38.3079"
                stroke="#3276E8"
                strokeWidth="6.91124"
                strokeLinecap="round"
              />
            </svg>
            Click to upload
          </div>
          {file && <span>{file.name}</span>}
          <input
            onChange={uploaderChangeHandler}
            ref={fileRef}
            name="file"
            type="file"
            id="file"
            className={style.file}
            accept=".png,.jpg"
          />
        </div> */}

        <input type="submit" value="submit" />
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
}
