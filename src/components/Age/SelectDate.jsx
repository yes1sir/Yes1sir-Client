import { useState, useEffect } from "react";
import styled from "styled-components";

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
    // 특정 년도와 월의 일 수를 계산
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
  // useEffect로 년도나 월이 변경될 때 선택된 날짜가 해당 월의 최대 일 수를 초과하지 않도록 조정

  return (
    <FlexContainer>
      <Current>
        {selectedYear}년 {selectedMonth}월 {selectedDate}일
      </Current>
      <AppWrapper>
        <AppContainer as={DFlex}>
          <AppSelect>
            <select value={selectedYear} onChange={handleYearChange}>
              {renderYearOptions()}
            </select>
          </AppSelect>

          <AppSelect>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {renderMonthOptions()}
            </select>
          </AppSelect>

          <AppSelect>
            <select value={selectedDate} onChange={handleDateChange}>
              {renderDateOptions()}
            </select>
          </AppSelect>
        </AppContainer>
      </AppWrapper>
    </FlexContainer>
  );
}

export default SelectDate;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70.9rem;
  margin-top: 67px;
  margin-bottom: 64px;
`;

const Current = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 6rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.w02};
  color: ${({ theme }) => theme.colors.b01};
  font-size: 2.4rem;
`;

const AppContainer = styled.div`
  border-top: 0.5px solid ${({ theme }) => theme.colors.g03};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.g03};
`;

const AppWrapper = styled.div`
  margin-top: 0.3rem;
  padding: 5.9rem 10.9rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.g02};
`;

const AppSelect = styled.div`
  width: 40%;

  select {
    width: 100%;
    padding: 10px;

    background-color: ${({ theme }) => theme.colors.g02};
    border: none;
    outline: none;

    font-size: 2rem;
    color: ${({ theme }) => theme.colors.b02};
    text-align: center;

    appearance: none;
    cursor: pointer;
  }
`;

const DFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
