import {buildQueryString, QueryParameter} from "@/utils/queryBuilder";

const NOBEL_API_BASE_URL = "https://api.nobelprize.org/2.1"

export type NobelPrizeCategory = "che" | "eco" | "lit" | "pea" | "phy" | "med"

export interface ItemLinks {
    rel: string;
    href: string;
    action: string;
    types: string;
}

interface Laureate {
    id?: number;
    name?: Translation;
    portion?: Laureate.PortionEnum;
    sortOrder?: Laureate.SortOrderEnum;
    motivation?: Translation;
    links?: Array<ItemLinks>;
}

namespace Laureate {
    export enum PortionEnum {
        _1 = <any>'1',
        _12 = <any>'1/2',
        _13 = <any>'1/3',
        _14 = <any>'1/4'
    }

    export enum SortOrderEnum {
        _1 = <any>'1',
        _2 = <any>'2',
        _3 = <any>'3'
    }
}

interface Translation {
    en?: string;
    se?: string;
    no?: string;
}

interface NobelPrize {
    awardYear: number;
    category: Translation;
    categoryFullName: Translation;
    dateAwarded: string;
    prizeAmount: number;
    prizeAmountAdjusted: number;
    laureates: Array<Laureate>;
}

interface NobelPrizesMeta {
    offset: number;
    limit: number;
    nobelPrizeYear: number;
    yearTo: number;
    nobelPrizeCategory: string;
    count: number;
}

interface Links {
    first: string;
    prev: string;
    self: string;
    next: string;
    last: string;
}

export interface NobelPrizesResult {

    nobelPrizes: Array<NobelPrize>;
    meta: NobelPrizesMeta;
    links: Array<Links>;
}

export async function nobelPrizesGet(offset: number,
                                     limit: number,
                                     sort: 'asc' | 'desc',
                                     nobelPrizeYear: number,
                                     nobelPrizeCategory?: NobelPrizeCategory
): Promise<NobelPrizesResult> {
    const endpoint = `${NOBEL_API_BASE_URL}/nobelPrizes`;

    const parameters: QueryParameter[] = [
        {name: "offset", value: offset},
        {name: "limit", value: limit},
        {name: "sort", value: sort},
        {name: "nobelPrizeYear", value: nobelPrizeYear},
    ]

    if (nobelPrizeCategory) {
        parameters.push({name: "nobelPrizeCategory", value: nobelPrizeCategory})
    }

    const result = await fetch(buildQueryString(endpoint, parameters));

    return result.json();
}

