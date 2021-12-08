import home from "../../pom/Home"

export default async (keyword) => {
    await home.search(keyword);
};