import { writable } from 'svelte/store';

const showNewOrder = writable(false);

const createPersistedStore = (key, defaultValue) => {
    const initialJson = localStorage.getItem(key)
    const initialValue = initialJson ? JSON.parse(initialJson) : defaultValue
    const store = writable(initialValue)

    const subscribe = fn =>
        store.subscribe(current => {
            localStorage.setItem(key, JSON.stringify(current))
            return fn(current)
        })

    return {
        subscribe,
        set: store.set
    }
}

const products = createPersistedStore("products", [
    { id: "1", cost: "12", desc: "სედანი" },
    { id: "2", cost: "10", desc: "სედანი (გარედან)" },
    { id: "3", cost: "6", desc: "სედანი (სალონი)" },
    { id: "4", cost: "17", desc: "ჯიპი" },
    { id: "5", cost: "12", desc: "ჯიპი (გარედან)" },
    { id: "6", cost: "8", desc: "ჯიპი (სალონი)" },
    { id: "7", cost: "10", desc: "პიკაპი" },
    { id: "8", cost: "0", desc: "სხვა" }
])

const orders = createPersistedStore("orders", [
    {
        number: "HH333FF",
        product: { id: "4", cost: "17", desc: "ჯიპი" },
        box: "1"
    },
    {
        number: "DD555RR",
        product: { id: "1", cost: "12", desc: "სედანი" },
        box: "3"
    },
    {
        number: "HH333FF",
        product: { id: "2", cost: "10", desc: "სედანი (გარედან)" },
        box: "2"
    },
    {
        number: "DD555RR",
        product: { id: "6", cost: "8", desc: "ჯიპი (სალონი)" },
        box: "5"
    },
    {
        number: "HH333FF",
        product: { id: "7", cost: "10", desc: "პიკაპი" },
        box: "4"
    },
    {
        number: "DD555RR",
        product: { id: "1", cost: "12", desc: "სედანი" },
        box: "0"
    },
    {
        number: "HH333FF",
        product: { id: "7", cost: "10", desc: "პიკაპი" },
        box: "4"
    },
    {
        number: "DD555RR",
        product: { id: "1", cost: "12", desc: "სედანი" },
        box: "0"
    },
    {
        number: "HH333FF",
        product: { id: "7", cost: "10", desc: "პიკაპი" },
        box: "4"
    },
    {
        number: "DD555RR",
        product: { id: "1", cost: "12", desc: "სედანი" },
        box: "0"
    },
    {
        number: "HH333FF",
        product: { id: "7", cost: "10", desc: "პიკაპი" },
        box: "4"
    },
    {
        number: "DD555RR",
        product: { id: "1", cost: "12", desc: "სედანი" },
        box: "0"
    }
])

export {
    orders,
    showNewOrder,
    products
}
