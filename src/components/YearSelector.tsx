import {useEffect, useState} from "react";
import {nobelPrizesGet} from "@/api/NobelPrizeAPI";
import {getYearRangeFromPrizesResult} from "@/utils/getYearRangeFromPrizesResult";
import {Button, Card, Select} from "antd";
import {router} from "next/client";

export default function YearSelector() {
    const [options, setOptions] = useState<Array<{ value: number, label: number }>>()
    const [loading, setLoading] = useState<boolean>(true)
    const [selectedYear, setSelectedYear] = useState<number | null>(null)
    const fetchData = async () => {

        const result = await nobelPrizesGet()
        const range = getYearRangeFromPrizesResult(result)

        setOptions(
            [
                ...Array(range.to - range.from + 1)
                    .fill(0)
                    .map((_, i) => ({value: range.from + i, label: range.from + i}))
            ]
        )

    }

    useEffect(() => {
        fetchData().then(() => setLoading(false))
    }, []);

    const onSubmit = () => {
        router.push(`/nagrody/en/${selectedYear}`);
    }
    return <Card title="Select Year" style={{maxWidth: 500, width: "100%"}}>
        <Select
            loading={loading}
            placeholder="year"
            value={selectedYear}
            onSelect={setSelectedYear}
            style={{width: "100%"}}
            options={options}
        />
        <Button disabled={!selectedYear}
                type={"primary"}
                onClick={onSubmit}
                style={{width: "100%", padding: 1, marginTop: 20}}>See Laureates</Button>
    </Card>;
}