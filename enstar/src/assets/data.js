const columns = [
    { name: 'projectName', required: true, label: 'Project Name', align: 'left', field: 'projectName', format: val => `${val}`, sortable: true },
    { name: 'type', align: 'center', label: 'Type', field: 'type', sortable: true },
    { name: 'participants', label: 'Participants', field: 'participants', sortable: true, align: 'center' },
    { name: 'totalRaised', label: 'Total Raised', field: 'totalRaised', sortable: true, align: 'center' },
    { name: 'currentPrice', label: 'Current Price', field: 'procurrentPricetein', sortable: true, align: 'center' },
    { name: 'endIn', label: 'End In', field: 'endIn', sortable: true, align: 'center' },
    // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
    {
        projectName: 'DEFY',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F8ybr83fb0ca45cm1yvrcaclwbvcp&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 82,
        totalRaised: 2000,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },
    {
        projectName: 'DEFY',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fm7ymqffzhxbq0sbm7tfcxlod17iq&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 2244,
        totalRaised: 3000,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },
    {
        projectName: 'WOMBAT',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Ffi9d7g8fw48wzeyzjqn85fv40dkk&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 747,
        totalRaised: 2300,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },
    {
        projectName: 'FreshCut',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F0ad6ta19iq9i0w9pihsvu42uc427&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 8212,
        totalRaised: 5070,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },
    {
        projectName: 'Deliq',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2Fln0i0zwxr8g08y9agrc7choiv30i&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 3651,
        totalRaised: 7020,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },
    {
        projectName: 'Orbitau',
        icon: 'https://polkastarter.com/_next/image?url=https%3A%2F%2Fassets.polkastarter.com%2F1pxylpsiokyszbbfy3eowrmynqz3&w=1920&q=70',
        type: 'TOKEN SALE',
        participants: 1021,
        totalRaised: 5000,
        currentPrice: 0.006,
        endIn: new Date("2022-08-15 23:59:59")
    },

]
const swipe_data = [{
    id: 0,
    name: 'mountains',
    src: 'https://cdn.quasar.dev/img/mountains.jpg'
}, {
    id: 1,
    name: 'parallax1',
    src: 'https://cdn.quasar.dev/img/parallax1.jpg'
}, {
    id: 2,
    name: 'parallax2',
    src: 'https://cdn.quasar.dev/img/parallax2.jpg'
}, {
    id: 3,
    name: 'quasar',
    src: 'https://cdn.quasar.dev/img/quasar.jpg'
}]

export {
    columns,
    rows,
    swipe_data
}