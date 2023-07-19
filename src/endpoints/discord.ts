import JAPIRest from "..";
import { ImageSize, JAPIDiscordUser } from "../@types";

export default class JAPIDiscord {
    private readonly base: JAPIRest;
    private readonly url: string;
    private readonly userUrl: string;
    private readonly guildUrl: string;

    constructor(base: JAPIRest) {
        this.base = base;
        this.url = `${this.base.baseUrl}/discord/v1`;
        this.userUrl = `${this.url}/user`;
        this.guildUrl = `${this.url}/guild`;
    }

    async getUser(userId: string): Promise<JAPIDiscordUser> {
        const request = await this.base
            .get(`${this.userUrl}/${userId}`)
            .then((res) => res.json());

        const { data: user } = request;

        return {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
            discriminator: user.discriminator,
            publicFlags: user.public_flags,
            flags: 256,
            banner: user.banner,
            accentColor: user.accent_color,
            globalName: user.global_name,
            avatarDecoration: user.avatar_decoration,
            displayName: user.display_name,
            bannerColor: user.banner_color,
            tag: user.tag,
            createdAt: user.createdAt,
            createdTimestamp: user.createdTimestamp,
            publicFlagsArray: user.public_flags_array,
            defaultAvatarURL: user.defaultAvatarURL,
            avatarURL: user.avatarURL,
            bannerURL: user.bannerURL,
            bio: user.bio,
            premiumSince: user.premium_since,
            premiumGuildSince: user.premium_guild_since,
            presence: request.presence,
            connections: request.connections,
        };
    }

    async getUserAvatar(
        userId: string,
        size: ImageSize = 128,
        animated: boolean = false,
    ): Promise<string | null> {
        let url = `${this.userUrl}/${userId}/avatar`;
        if (size) url += `?size=${size}`;
        if (animated) url += `&animated=${animated}`;
        const request = await this.base.get(url);

        if (!request.url.includes("cdn.discordapp.com")) return null;

        return request.url;
    }

    async getUserBanner(
        userId: string,
        size: ImageSize = 128,
        animated: boolean = false,
    ): Promise<string | null> {
        let url = `${this.userUrl}/${userId}/banner`;
        if (size) url += `?size=${size}`;
        if (animated) url += `&animated=${animated}`;
        const request = await this.base.get(url);

        if (!request.url.includes("cdn.discordapp.com")) return null;

        return request.url;
    }
}
