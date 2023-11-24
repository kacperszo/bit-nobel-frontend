import {buildQueryString, QueryParameter} from "@/utils/queryBuilder";
import exp from "constants";

const NOBEL_API_BASE_URL = "https://api.nobelprize.org/2.1"

export type NobelPrizeCategory = "che" | "eco" | "lit" | "pea" | "phy" | "med"

export interface ItemLinks {
    rel: string;
    href: string;
    action: string;
    types: string;
}

export interface Laureate {
    id: string;
    knownName: Translation;
    fullName: Translation;
    portion: Portion;
    sortOrder: SortOrder;
    motivation?: Translation;
    links: Array<ItemLinks>;
}

type Portion = "1" | '1/2' | '1/3' | '1/4'
type SortOrder = '1' | '2' | '3'

interface Translation {
    en?: string;
    se?: string;
    no?: string;
}

export interface NobelPrize {
    awardYear: string;
    category: Translation;
    categoryFullName: Translation;
    dateAwarded: string;
    prizeAmount: number;
    prizeAmountAdjusted: number;
    laureates: Array<Laureate>;
    links: Array<ItemLinks>
}

interface NobelPrizesMeta {
    offset: number;
    limit: number;
    nobelPrizeYear?: number;
    yearTo?: number;
    nobelPrizeCategory?: NobelPrizeCategory;
    count: number;
    terms?: string;
    license?: string;
    disclaimer?: string;
}

interface Links {
    first: string;
    prev?: string;
    self: string;
    next: string;
    last: string;
}

export interface NobelPrizesResult {

    nobelPrizes: Array<NobelPrize>;
    meta: NobelPrizesMeta;
    links: Links;
}

interface nobelPrizesGetParameters {
    offset?: number,
    limit?: number,
    sort?: 'asc' | 'desc',
    nobelPrizeYear?: number,
    nobelPrizeCategory?: NobelPrizeCategory
}

export async function nobelPrizesGet({
                                         offset,
                                         limit,
                                         sort,
                                         nobelPrizeYear,
                                         nobelPrizeCategory
                                     }: nobelPrizesGetParameters = {}
): Promise<NobelPrizesResult> {
    const endpoint = `${NOBEL_API_BASE_URL}/nobelPrizes`;

    const parameters: QueryParameter[] = []

    if (offset) parameters.push({name: "offset", value: offset})
    if (limit) parameters.push({name: "limit", value: limit})
    if (sort) parameters.push({name: "sort", value: sort})
    if (nobelPrizeYear) parameters.push({name: "nobelPrizeYear", value: nobelPrizeYear})
    if (nobelPrizeCategory) parameters.push({name: "nobelPrizeCategory", value: nobelPrizeCategory})


    const result = await fetch(buildQueryString(endpoint, parameters));

    return await result.json();
}

