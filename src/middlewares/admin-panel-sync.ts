export default (config, { strapi }) => {
    return (context, next) => { 
        return next();
    };
};