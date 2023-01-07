import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-GB", {
    month: "long",
    timeZone: "Europe/Kiev",
  });
  const year = props.date.toLocaleString("en-GB", {
    year: "numeric",
    timeZone: "Europe/Kiev",
  });
  const day = props.date.toLocaleString("en-GB", {
    day: "2-digit",
    timeZone: "Europe/Kiev",
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
