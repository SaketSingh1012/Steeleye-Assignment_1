import React from "react";
import List from "../component/list/List";

export default {
    title:"List",
    component:List
}

export function normal(){
    return <List variant ="container"></List>
}
export function dark(){
    return <List variant="dark"></List>
}