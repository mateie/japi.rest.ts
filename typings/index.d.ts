export type JAPIDiscordUser = {
    error?: string;
    id: string;
    username: string;
    avatar?: string;
    discriminator: string;
    publicFlags: number;
    flags: number;
    banner?: string;
    accentColor?: number;
    globalName: string;
    avatarDecoration?: string;
    displayName?: string;
    bannerColor?: string;
    tag: string;
    createdAt: string;
    createdTimestamp: number;
    publicFlagsArray: string[];
    defaultAvatarURL: string;
    avatarURL: string;
    bannerURL: string;
    bio?: string;
    premiumSince?: string;
    premiumGuildSince?: string;
    presence: JAPIDiscordPresence;
    connections: any;
};

export type JAPIDiscordPresence = {
    status: "online" | "dnd" | "idle" | "offline";
    activities: JAPIDiscordActivity[];
    clientStatus: ("desktop" | "mobile" | "web")[];
    error?: string;
};

declare const ALLOWED_SIZES: readonly [
    16,
    32,
    64,
    128,
    256,
    512,
    1024,
    2048,
    4096,
];
export type ImageSize = (typeof ALLOWED_SIZES)[number];

export type JAPIDiscordActivity = {
    name: string;
    type: number;
    url?: string;
    details?: string;
    state: string;
    applicationId?: string;
    timestamps: {
        start?: number;
        end?: number;
    };
    party?: {
        id?: string;
    };
    assets?: {
        largeImage?: string;
        largeText?: string;
        smallImage?: string;
        smallText?: string;
    };
    flags: number;
    emoji?: {
        animated: boolean;
        name: string;
        id: string;
        createdTimestamp: number;
        url: string;
        identifier: string;
    };
    buttons: any[];
    createdTimestamp: number;
};

export type JAPIWikihowSearch = {
    title: string;
    link: string;
    thumbnail: string;
    stats: {
        views: number;
        last_updated: string;
    };
    error?: string;
};

export type JAPIWikihowArticle = {
    title: string;
    description: string;
    byline: {
        name: string;
        href?: string;
    };
    last_updated: string;
    references: {
        ref_num: number;
        refrence?: string;
        reference?: string;
    }[];
    sections: {
        prefix: string;
        headline: string;
        steps: {
            num: number;
            image: {
                link: string;
                alt: string;
            };
            content: string;
        }[];
    }[];
};
