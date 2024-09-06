import { makeObservable, observable, action } from "mobx";
import { useContext } from "react";
import { StoreContext } from "./store";

export default class ActivityStore{
    title = 'Hello mobx';
    
    constructor(){
        makeObservable(this, {
            title: observable,
            setTitle: action.bound
        })
    }
    setTitle(){
        this.title = this.title + '!';
    }
}

export function useStore(){
    return useContext(StoreContext);
}