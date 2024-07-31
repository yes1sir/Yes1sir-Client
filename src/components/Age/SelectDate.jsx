import { useState, useEffect } from "react";
import "./SelectDate.css";

function SelectDate() {
  const currentYear = new Date().getFullYear();
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleDateChange = (e) => {
    let { value } = e.target;
    setSelectedDate(parseInt(value));
  };

  const handleMonthChange = (e) => {
    let { value } = e.target;
    setSelectedMonth(parseInt(value));
  };

  const handleYearChange = (e) => {
    let { value } = e.target;
    setSelectedYear(parseInt(value));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const renderDateOptions = () => {
    const dateOptions = [];
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    for (let i = 1; i <= daysInMonth; i++) {
      dateOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return dateOptions;
  };

  const renderMonthOptions = () => {
    const monthOptions = [];
    for (let i = 1; i <= 12; i++) {
      monthOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return monthOptions;
  };

  const renderYearOptions = () => {
    const yearOptions = [];
    for (let i = currentYear; i >= 1900; i--) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return yearOptions;
  };

  useEffect(() => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    if (selectedDate > daysInMonth) {
      setSelectedDate(daysInMonth);
    }
  }, [selectedYear, selectedMonth, selectedDate]);

  return (
    <div className="d-flex">
      <div className="app">
        <div className="app-container d-flex">
          <div className="app-select">
            <select value={selectedYear} onChange={handleYearChange}>
              {renderYearOptions()}
            </select>
          </div>

          <div className="app-select">
            <select value={selectedMonth} onChange={handleMonthChange}>
              {renderMonthOptions()}
            </select>
          </div>

          <div className="app-select">
            <select value={selectedDate} onChange={handleDateChange}>
              {renderDateOptions()}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectDate;
