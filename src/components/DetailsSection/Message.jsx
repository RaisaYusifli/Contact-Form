import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import "../Contact.css";
import { API_URL } from "../../const";

export const Message = () => {
  const methods = useFormContext();
  const arr = useFieldArray({
    //arraylerin dinamik sekilde tedbiqi
    control: methods.control,
    name: "texts",
  });
  // const arrItems=methods.watch('texts');
  // console.log(arrItems);

  const handleDeleteMessage = async ({ id }) => {
    await fetch(`${API_URL}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
      mode: "cors",
    });
    arr.remove(id);
  };

  return (
    <div className="flex--item">
      <label htmlFor="message">Text</label>
      <button type="button" onClick={() => arr.append("")}>+</button>
      {arr.fields.map(({ id }, index) => {
        return (
          <Controller
            key={id}
            name={`texts[${index}]`}
            control={methods.control}
            rules={{
              required: "message required part",
            }}
            render={({ field }) => {
              return (
                <>
                  <textarea
                    {...field}
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button type="button" onClick={(e) => handleDeleteMessage(e,index)}>-</button>
                  {methods.formState.errors?.texts?.[index] && (
                    <div className="form-error">
                      {methods.formState.errors?.texts?.[index].message}
                    </div>
                  )}
                </>
              );
            }}
          />
        );
      })}
    </div>
  );
};
