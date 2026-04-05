export class APIService<ItemT> {
    private serviceUrl: string;

    constructor(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

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

    public async create(): Promise<ItemT[]> {
        const res = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: 
        });
        const data = await res.json();
        return data;
    }
}