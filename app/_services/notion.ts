"use server";

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NotionDatabaseResponse } from "../_types/notion-types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.DATABASE_ID!

export async function getPosts() {
  const response = await notion.databases.query({
    database_id: database_id,
  }); 
  
  //console.log(response)

  const typedResponse = response as unknown as NotionDatabaseResponse;
  

  return typedResponse.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      description: post.properties.description.rich_text[0].plain_text,
      author: post.properties.author.people[0],
      tags: post.properties.tags.multi_select.map((tag) => tag.name),
      createdAt: post.created_time,
    };
  });

  
}

export async function getPost(slug: string) {
  const response = await notion.databases.query({
    database_id: database_id,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as NotionDatabaseResponse;

  //console.log(mdString.parent)

  return {
    title: typedResponse.results[0].properties.title.title[0].plain_text,
    content: mdString.parent,
  };
}