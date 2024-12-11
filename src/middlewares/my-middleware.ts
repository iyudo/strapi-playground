export default (config, { strapi }) => {
    return (context, next) => { 
        if (context.request.method === 'PUT' && context.request.url.startsWith('/content-manager/collection-types/') ) {
        //     // console.log("start custom midlleware being called");
        //     // console.log(context);
        //     // console.log(context.request.body);

        //     const urlParts = context.request.url.split('/');
        //     const queryParts = urlParts[urlParts.length - 1].split('?');
        //     const id = queryParts[0];
        //     context.params = { id };
        //     context.originalUrl = '/api/contents/' + urlParts[urlParts.length - 1];
        //     context.request.url = '/api/contents/' + urlParts[urlParts.length - 1];
        //     context.request.body = {
        //         data: context.request.body,
        //     };
        //     // context.custom = {
        //     //     documentID: id,
        //     // };
        //     // console.log(context);
        //     // console.log("end custom midlleware being called");
        } else if (context.request.method === 'GET' && context.request.url.startsWith('/content-manager/collection-types/api::article.article?') ) {
        //     console.log('custom middleware', context.request.url);
        //     console.log(context.params);
        //     const urlParts = context.request.url.split('/');
        // //     // // console.log(urlParts);
        //     // const queryParts = urlParts[urlParts.length - 1].split('?');
        //     // const id = queryParts[0];
        //     context.params = { '0': '/api/articles' };
        //     context.originalUrl = '/api/articles/' + urlParts[urlParts.length - 1];
        //     context.request.url = '/api/articles/' + urlParts[urlParts.length - 1];
        // //     // console.log(context);
        //     context.request.body = {
        //         data: context.request.body,
        //     };
        }
        return next();
    };
};