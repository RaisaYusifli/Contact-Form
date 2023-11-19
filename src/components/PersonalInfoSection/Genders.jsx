import { Controller, useFormContext } from "react-hook-form";
import "../Contact.css";

const Genders = () => {
  const methods = useFormContext();

  return (
    <div className="flex--item">
      <label className="label" htmlFor="">
        Gender
      </label>
      <div>
        <Controller
          control={methods.control}
          name="gender"
          rules={{
            required: "This field is mandetory!",
          }}
          render={({ field }) => {
            return <>
              <label htmlFor="male" className="label">
                <input
                  checked={field.value === "male"}
                  {...field}
                  type="radio"
                  id="male"
                  value="male"
                />
                Male
              </label>
              ;
              <label htmlFor="female" className="label">
                <input
                  checked={field.value === "female"}
                  {...field}
                  type="radio"
                  id="female"
                  value="female"
                />
                Female
              </label>
              ;
            </>;
          }}
        />
        {methods.formState.errors?.gender && (
          <div className="form-error">{methods.formState.errors?.gender?.message}</div>
        )}
        {/* <label htmlFor="male" className={style.label}>
          <input type="radio" name="gender" id="male" value="male" />
          Male
        </label>
        <label htmlFor="female" className={style.label}>
          <input type="radio" name="gender" id="female" value="female" />
          Female
        </label> */}
      </div>
    </div>
  );
};

export default Genders;
