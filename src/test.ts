import JAPIRest from ".";

(async () => {
    try {
        const api = new JAPIRest(
            "JAPI.MjM0NDczMDk0OTUxNTIwMDQ5OA==.oc8.tkaoG3ZD1aY1pgeWjDS3R",
        );

        const user = await api.discord.getUser("401269337924829186");
        console.log(user);

        const userAvatar = await api.discord.getUserAvatar(
            "401269337924829186",
        );
        console.log(userAvatar);

        const userBanner = await api.discord.getUserBanner(
            "401269337924829186",
        );
        console.log(userBanner);

        const search = await api.wikihow.search("how to make a sandwich");
        console.log(search);

        const article = await api.wikihow.getArticle("Make a Sandwich");
        console.log(article);
    } catch (err) {
        console.error(err);
    }
})();
