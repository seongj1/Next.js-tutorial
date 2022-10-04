import Head from 'next/head'
import {useEffect, useState} from "react";
import axios, {Axios} from "axios";
import ItemList from "../src/component/ItemList";
import {Divider, Header} from "semantic-ui-react";

export default function Home() {
    const [list, setList] = useState([]);
    const API_URL =
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

        function getData() {
            axios.get(API_URL).then((res) => {
                console.log(res.data);
                setList(res.data);
            });
        }

        useEffect(() => {
            getData();
        }, []);

    return (
        <div>
            <Head>
                <title>HOME | seongJ</title>
            </Head>
            <Header as={"h3"} style={{ paddingTop: 40}}>
                베스트 상품
            </Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as={"h3"} style={{ paddingTop: 40 }}>
                신상품
            </Header>
            <Divider />
            <ItemList list={list.slice(9)} />
        </div>
    );
}
