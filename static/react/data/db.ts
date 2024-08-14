import { LocalStoragePreset } from '../../../node_modules/lowdb/lib/browser.js'

export type Product = {
    id: string
    name: string,
    image: string,
    slug: string,
    price: number,
    description: string,
}

export type SuperStoreDB = {
    products: Product[]
}

const createDB = (sdb: SuperStoreDB) => {
    const defaultData: SuperStoreDB = sdb
    const db = LocalStoragePreset<SuperStoreDB>('db', defaultData)

    return db
}

export default createDB