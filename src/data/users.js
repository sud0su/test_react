import { getRandomName } from "../utils/plugin";

const CountAvatar = () => {
    // fetching count data
    return 100;
}

const Avatar = (max = 10) => {
    let userData = [];

    for (let i = 0; i < max; i++) {
        userData.push({
            "avatar": "https://i.pravatar.cc/",
            "name": `${getRandomName()}`
        })
    }
    return userData;
}

export { CountAvatar, Avatar };