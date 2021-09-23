import { Client } from "@notionhq/client"
import {galleryId} from "./gallery.config.js"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = galleryId;

export async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

export async function readContents(filter) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: filter 
  });
  return response;
}

export async function readPropertyList(property, filter) {
  return readContents(filter).then(
    (response)=>response.results).then(
      (results)=> results.map((result) => result.properties[property])
    );
}