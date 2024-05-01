export const getDriversAfter1960 = drivers => {
  // Define a data de corte para 1º de janeiro de 1960
  const cutoffDate = new Date('1960-01-01');

  // Filtra a lista de pilotos com base na data de nascimento
  return drivers.filter(driver => {
    // Converte a data de nascimento do piloto para um objeto Date
    const dateOfBirth = new Date(driver.dateOfBirth);

    console.log(cutoffDate);

    // Verifica se a data de nascimento é posterior a 1º de janeiro de 1960
    return dateOfBirth > cutoffDate;
  });
};
