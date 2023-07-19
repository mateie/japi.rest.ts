import JAPIRest from "..";
import { JAPIWikihowArticle, JAPIWikihowSearch } from "../@types";

export default class JAPIWikiHow {
    private readonly base: JAPIRest;

    constructor(base: JAPIRest) {
        this.base = base;
    }

    async search(query: string): Promise<JAPIWikihowSearch[]> {
        return (
            await this.base
                .get(`${this.base.baseUrl}/wikihow/v1/search?q=${query}`)
                .then((res) => res.json())
        ).data;
    }

    async getArticle(title: string): Promise<JAPIWikihowArticle> {
        return (
            await this.base
                .get(`${this.base.baseUrl}/wikihow/v1/info/${title}`)
                .then((res) => res.json())
        ).data;
    }
}
