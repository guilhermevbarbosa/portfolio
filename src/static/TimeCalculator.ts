export class TimeCalculator {
    static calculateAge(dateOfBirth: string) {
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
    }

    static calculatePeriod(startDate: string, endDate: string) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        let dateDifference = Math.abs(end.getTime() - start.getTime());

        const anos = Math.floor(dateDifference / (1000 * 3600 * 24 * 365.25));
        dateDifference -= anos * 1000 * 3600 * 24 * 365.25;

        const meses = Math.floor(dateDifference / (1000 * 3600 * 24 * 30.44));
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

        if (!anos && meses === 0) period += '1 mês';

        return period;
    }

    static formatDate(date: string | Date) {
        return new Date(date).toISOString().split('T')[0];
    }
}