export const TimeCalculator = {
  calculateAge(dateOfBirth: string) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  },

  calculatePeriod(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let mesesTotais =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth();

    if (end.getDate() < start.getDate()) mesesTotais--;

    const anos = Math.floor(mesesTotais / 12);
    const meses = mesesTotais % 12;
    let period = "";

    if (anos > 0) {
      period += `${anos} ano`;
      if (anos > 1) period += "s";
    }

    if (anos > 0 && meses > 0) period += " e ";

    if (meses > 0) {
      period += `${meses} mes`;
      if (meses > 1) period += "es";
    }

    if (!anos && meses === 0) {
      const dateDifference = Math.abs(end.getTime() - start.getTime());
      const dias = Math.floor(dateDifference / (1000 * 3600 * 24));
      period += `${dias} dia`;
      if (dias !== 1) period += "s";
    }

    return period;
  },

  formatDate(date: string | Date) {
    return new Date(date).toISOString().split("T")[0];
  }
};
