export const getImagePath = (imageName) => {
    return new URL(`../assets/images/products/vignettes/${imageName}`, import.meta.url).href;
}