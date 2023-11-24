import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Button, Card, Layout, Pagination} from "antd";
import React, {useEffect, useState} from "react";
import {NobelPrize, nobelPrizesGet, NobelPrizesResult} from "@/api/NobelPrizeAPI";
import {getYearRangeFromPrizesResult} from "@/utils/getYearRangeFromPrizesResult";
import {useRouter} from "next/router";
import {Table} from 'antd';
import type {ColumnsType, TableProps} from 'antd/es/table';
import Title from "antd/lib/typography/Title";
import date from "async-validator/dist-types/validator/date";

const inter = Inter({subsets: ['latin']})

interface DataType {
    key: number;
    year: number;
    date: string;
    category: string | undefined;
    amount: string;
}

type validLanguages = "en" | "no" | "se";
const columns: ColumnsType<DataType> = [
    {
        title: 'Year',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
    },
    {
        title: 'Date of award',
        dataIndex: 'date',
        sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Prize amount',
        dataIndex: 'amount',
        sorter: (a, b) => Number(a.amount) - Number(b.amount)
    }

]
export default function NobelPriceByYearPage() {
    const router = useRouter();
    const [nobelPrizesResult, setNobelPrizesResult] = useState<DataType[]>([])
    const lang: validLanguages = router.query.lang as validLanguages || "en"
    const fetchData = async () => {

        const result = await nobelPrizesGet({
            nobelPrizeYear: Number(router.query.year)
        })

        setNobelPrizesResult(result.nobelPrizes.map((result, i) => {
            return {
                key: i,
                year: Number(result.awardYear),
                date: result.dateAwarded ? new Date(result.dateAwarded).toLocaleDateString("pl") : "N/A",
                category: result.categoryFullName[lang],
                amount: result.prizeAmount.toLocaleString("pl"),
            };
        }))
    }
    useEffect(() => {
        fetchData();
    }, [router]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20 0",
        }}>
            <div style={{paddingTop: 35}}>
                <Title level={2}>The Nobel Prizes of {router.query.year}</Title>
            </div>
            <Table
                style={{
                    maxWidth: 1000, width: "100%", margin: 10
                }}
                columns={columns}
                dataSource={nobelPrizesResult}
                pagination={false}
            />
        </div>
    )
}