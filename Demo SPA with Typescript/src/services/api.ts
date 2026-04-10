import { Log } from "../decorators/logs";

export class APIService<ItemT> {
    private serviceUrl: string;

    constructor(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    @Log
    public async getAll(): Promise<ItemT[]> {
        const res = await fetch(this.serviceUrl);
        const data = await res.json();
        return data;
    }

    public async getById(id: number): Promise<ItemT> {
        const res = await fetch(`${this.serviceUrl}/${id}`);
        const data = await res.json();
        return data;
    }

    @Log
    public async create(itemData: ItemT): Promise<ItemT[]> {
        const res = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData)
        });
        const data = await res.json();
        return data;
    }

    public async update(id: number, itemData: ItemT): Promise<ItemT[]> {
        const res = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData)
        });
        const data = await res.json();
        return data;
    }

    public async delete(id: number): Promise<void> {
        await fetch(`${this.serviceUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}