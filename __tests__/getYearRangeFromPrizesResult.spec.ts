import {NobelPrizesResult} from "@/api/NobelPrizeAPI";
import {getYearRangeFromPrizesResult} from "@/utils/getYearRangeFromPrizesResult";

describe("getYearRangeFromPrizesResult", () => {
    test("should find minimal and maximal year in NobelPrizesResult", () => {
        const result: NobelPrizesResult = {
            nobelPrizes: [
                {
                    awardYear: "1901",
                    category: {en: "", no: "", se: ""},
                    categoryFullName: {
                        en: "",
                        no: "",
                        se: "",
                    },
                    dateAwarded: "1901-8-02",
                    prizeAmount: 0,
                    prizeAmountAdjusted: 0,
                    links: [],
                    laureates: []
                },
                {
                    awardYear: "1909",
                    category: {en: "", no: "", se: ""},
                    categoryFullName: {
                        en: "",
                        no: "",
                        se: "",
                    },
                    dateAwarded: "1902-11-12",
                    prizeAmount: 0,
                    prizeAmountAdjusted: 0,
                    links: [],
                    laureates: [],
                },
            ],
            meta: {
                offset: 0,
                limit: 2,
                count: 2,
                terms: "",
                license: "",
                disclaimer: "",
            },
            links: {
                first: "",
                self: "",
                next: "",
                last: "",
            },
        };
        expect(getYearRangeFromPrizesResult(result)).toStrictEqual({from: 1901, to: 1909})
    });
});
