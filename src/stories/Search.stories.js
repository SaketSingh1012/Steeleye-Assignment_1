import React from 'react';
import Search from '../component/search/Search';

export default {
    title:"Search",
    component : Search
}

export function primary(){
    return <Search variant="primary"></Search>
}

export function secondary(){
    return <Search variant="secondary"></Search>
}

export function success(){
    return <Search variant="success"></Search>
}

export function danger(){
    return <Search variant="danger"></Search>
}
export function border(){
    return <Search variant="border"></Search>
}