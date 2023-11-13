import {NobelPrizesResult} from "@/api/NobelPrizeAPI";

interface NobelPrizesYearRange {
    from: number,
    to: number
}

export function getYearRangeFromPrizesResult(result: NobelPrizesResult): NobelPrizesYearRange {

    let minYear = Math.min()
    let maxYear = Math.max()

    result.nobelPrizes.forEach(prize => {
        minYear = Math.min(minYear, Number(prize.awardYear))
        maxYear = Math.max(maxYear, Number(prize.awardYear))
    })

    return {
        from: minYear,
        to: maxYear
    }
}