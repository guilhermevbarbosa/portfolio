import { TimeCalculator } from "../static/TimeCalculator";

const ExperiencesTime = {
    gftTime: {
        init: TimeCalculator.formatDate("2024-08-08"),
        end: TimeCalculator.formatDate(new Date())
    },
    frtTime: {
        init: TimeCalculator.formatDate("2019-09-02"),
        end: TimeCalculator.formatDate("2024-08-07")
    },
    senacTime: {
        init: TimeCalculator.formatDate("2017-09-01"),
        end: TimeCalculator.formatDate("2019-09-02"),
    },
    tiGrad: {
        init: TimeCalculator.formatDate("2019-01-01"),
        end: TimeCalculator.formatDate("2021-08-01"),
    },
    multGrad: {
        init: TimeCalculator.formatDate("2017-01-01"),
        end: TimeCalculator.formatDate("2019-01-02"),
    },
    mobPos: {
        init: TimeCalculator.formatDate("2022-05-24"),
        end: TimeCalculator.formatDate("2023-05-25"),
    },
}

export default ExperiencesTime;