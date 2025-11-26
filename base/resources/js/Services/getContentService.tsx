import {BACKEND_API_URL} from "@/constants.ts";

export class GetContentService {

    public async getContent(): Promise<any[]> {
        try {
            const response = await fetch(`${BACKEND_API_URL}/home-content`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.json();
            return content;
        } catch (error) {
            console.error('Failed to fetch foods:', error);
            return [];
        }
    }
}
