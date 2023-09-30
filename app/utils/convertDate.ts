export const convertDate = (inputDate: string) => {
    return new Date(inputDate).toLocaleString().substring(0, 10);
  };