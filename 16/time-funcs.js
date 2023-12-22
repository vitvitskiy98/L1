const format = "MMMM Do YYYY, h:mm:ss a";

function todayDate() {
  return "Today's date: " + moment().format(format);
}

function addDate() {
  return (
    "The date in 3 months and 3 days: " +
    moment().add(3, "d").add(3, "M").format(format)
  );
}

export { todayDate, addDate };
