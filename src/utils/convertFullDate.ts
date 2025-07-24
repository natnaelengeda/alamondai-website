export const convertFullDateToDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript

  switch (month) {
    case 1:
      return `January ${date.getDate()}`;
    case 2:
      return `February ${date.getDate()}`;
    case 3:
      return `March ${date.getDate()}`;
    case 4:
      return `April ${date.getDate()}`;
    case 5:
      return `May ${date.getDate()}`;
    case 6:
      return `June ${date.getDate()}`;
    case 7:
      return `July ${date.getDate()}`;
    case 8:
      return `August ${date.getDate()}`;
    case 9:
      return `September ${date.getDate()}`;
    case 10:
      return `October ${date.getDate()}`;
    case 11:
      return `November ${date.getDate()}`;
    case 12:
      return `December ${date.getDate()}`;
    default:
      return `Invalid month`;
  }

}

export const getRegularDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript

  switch (month) {
    case 1:
      return `January ${date.getDate()}, ${date.getFullYear()}`;
    case 2:
      return `February ${date.getDate()}, ${date.getFullYear()}`;
    case 3:
      return `March ${date.getDate()}, ${date.getFullYear()}`;
    case 4:
      return `April ${date.getDate()}, ${date.getFullYear()}`;
    case 5:
      return `May ${date.getDate()}, ${date.getFullYear()}`;
    case 6:
      return `June ${date.getDate()}, ${date.getFullYear()}`;
    case 7:
      return `July ${date.getDate()}, ${date.getFullYear()}`;
    case 8:
      return `August ${date.getDate()}, ${date.getFullYear()}`;
    case 9:
      return `September ${date.getDate()}, ${date.getFullYear()}`;
    case 10:
      return `October ${date.getDate()}, ${date.getFullYear()}`;
    case 11:
      return `November ${date.getDate()}, ${date.getFullYear()}`;
    case 12:
      return `December ${date.getDate()}, ${date.getFullYear()}`;
    default:
      return `Invalid month`;
  }

  return `${date.getDate()}-${date.getMonth() + 1}- ${date.getFullYear()}`
}