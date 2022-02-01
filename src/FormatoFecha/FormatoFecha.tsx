export const formatoFecha = (date:any) => {
  try {
    return (
      date &&
      date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    );
  } catch (error) {
    return "Fecha Inválida.";
  }
};