export const createSlug = (title: string) => {

    if (title.includes(' ')) {
        return title.split(' ').join('-');        
    }
    else {
        return title
    }
};
