import {BACKEND_API_URL} from "@/constants.ts";

export class GetItemsService {
    public async getDrinkItems(): Promise<any[]> {
        try {
            const response = await fetch(`${BACKEND_API_URL}/drinks`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const items = await response.json();
            return items;
        } catch (error) {
            console.error('Failed to fetch drinks:', error);
            return [];
        }
    }

    public async getFoodItems(): Promise<any[]> {
        try {
            const response = await fetch(`${BACKEND_API_URL}/foods`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const items = await response.json();
            return items;
        } catch (error) {
            console.error('Failed to fetch foods:', error);
            return [];
        }
    }

}
