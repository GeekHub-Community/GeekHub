export const extractYearFromDate = (dateString:string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
}