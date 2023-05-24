import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormWithCalendar = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected date:", startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">בחירת תאריך:</label>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="form-control"
        />
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Submit
      </button> */}
    </form>
  );
};

export default FormWithCalendar;
