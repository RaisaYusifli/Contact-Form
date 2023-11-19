import { Controller, useFormContext } from "react-hook-form";
import "../Contact.css";

export const Priority = () => {
  const methods = useFormContext();
  return (
    <div className="flex--item">
      <label htmlFor="priority">Priorarity</label>
      <Controller
        name="priority"
        control={methods.control}
        render={({ field }) => {
          return (
            <select id="priority" {...field}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          );
        }}
      />
    </div>
  );
};
