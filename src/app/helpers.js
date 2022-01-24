import axios from 'axios';

// const GROUP_DM_ICONS = [
//     "https://discord.com/assets/861ab526aa1fabb04c6b7da8074e3e21.png", // orange
//     "https://discord.com/assets/b8912961ea6ab32f0655d583bbc26b4f.png", // yellow
//     "https://discord.com/assets/773616c3c8a7e21f8a774eb0d5625436.png", // teal
//     "https://discord.com/assets/f810dc5fedb7175c43a3389aa890534f.png", // green
//     "https://discord.com/assets/e1fb24a120bdd003a84e021b16ec3bef.png", // blue
//     "https://discord.com/assets/b3150d5cef84b9e82128a1131684f287.png", // purple
//     "https://discord.com/assets/485a854d5171c8dc98088041626e6fea.png", // pink
//     "https://discord.com/assets/1531b79c2f2927945582023e1edaaa11.png", // red
//   ];

export const generateAvatarURL = (avatarHash, id, discriminator) => {
    let avatarURL = 'https://cdn.discordapp.com/';
    if (avatarHash) avatarURL += `avatars/${id}/${avatarHash}.webp`;
    else avatarURL += `embed/avatars/${discriminator % 5}.png`;
    return avatarURL;
};

export const generateGroupDMIcon = (id) => {
    return generateAvatarURL(null, null, id)
    // discord.com does not work
    // return GROUP_DM_ICONS[(BigInt(id) >> 22n) % 8n];
}

export const getCreatedTimestamp = (id) => {
    const EPOCH = 1420070400000;
    return id / 4194304 + EPOCH;
};

export const getFavoriteWords = (words) => {
    words = words.flat(3);
    
    let item,
        length = words.length,
        array = [],
        object = {};
    
    for (let index = 0; index < length; index++) {
        item = words[index];
        if (!item) continue;
    
        if (!object[item]) object[item] = 1;
        else ++object[item];
    }
    
    for (let p in object) array[array.length] = p;
    
    return array.sort((a, b) => object[b] - object[a]).map((word) => ({ word: word, count: object[word] })).slice(0, 2);
};

export const getGitHubContributors = () => {
    return new Promise((resolve, reject) => {
        const cachedExpiresAt = localStorage.getItem('contributors_cache_expires_at');
        const cachedData = localStorage.getItem('contributors_cache');
        if (cachedExpiresAt && (cachedExpiresAt > Date.now()) && cachedData) return resolve(JSON.parse(cachedData));
        axios.get('https://api.github.com/repos/Androz2091/discord-data-package-explorer/contributors')
            .then((response) => {
                const data = response.data.map((user) => ({ username: user.login, avatar: user.avatar_url, url: user.html_url }) );
                localStorage.setItem('contributors_cache', JSON.stringify(data));
                localStorage.setItem('contributors_cache_expires_at', Date.now() + 3600000);
                resolve(data);
            }).catch(() => {
                reject(cachedData || []);
            });
    });
};
