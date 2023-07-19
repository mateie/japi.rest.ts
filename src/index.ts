import JAPIDiscord from "./endpoints/discord";
import JAPIWikiHow from "./endpoints/wikihow";

export default class JAPIRest {
    readonly baseUrl: string;
    readonly discord: JAPIDiscord;
    readonly wikihow: JAPIWikiHow;
    private readonly key: string;

    constructor(key: string) {
        this.key = key;
        this.baseUrl = "https://japi.rest";
        this.checkKey();

        this.discord = new JAPIDiscord(this);
        this.wikihow = new JAPIWikiHow(this);
    }

    get(endpoint: string, params?: string) {
        if (params) endpoint = endpoint + params;
        return fetch(endpoint, {
            headers: {
                Authorization: `${this.key}`,
            },
        });
    }

    private checkKey() {
        if (!this.key) throw new Error("No API key provided");
        if (!/^JAPI\..{50,54}$/.test(this.key))
            throw new Error("Invalid API key");
        return true;
    }
}
