import { getRandomName } from "../utils/plugin";

const Avatar = (max = 100) => {
    let userData = [];

    for (let min = 0; min < max; min++) {
        userData.push({
            "avatar": "https://i.pravatar.cc/",
            "name": `${getRandomName()}`
        })
    }
    return userData;
}

export { Avatar };