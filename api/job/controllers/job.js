"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const index = "jobs";
module.exports = {
  search: async (ctx) => {
    // console.log("ctx params", ctx.params);
    // console.log("ctx query ", ctx.query);

    const keyword = ctx.query.keyword;
    // console.log("keyword ", keyword);
    const { client } = strapi.services.algolia;
    const index = client.initIndex("jobs");
    const { hits } = await index.search(keyword);
    return hits.map(hit => {const {id, title, description, salary } = hit; return {id, title, description, salary }});
  }
};
