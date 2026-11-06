const dateFormatter = (updatedAt: string) => {
    return new Date(updatedAt).toISOString().replace("T", " ").split(".")[0];
};

export const Formatter = {
    dateFormatter,
};
