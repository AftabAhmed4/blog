// import { defineField, defineType } from "sanity";
export const eventType = {
    name:'event',
    title: 'Event',
    type: 'document',
    fields: [  // Use "fields" as an array to define the individual fields
              {
                name: "heroHeading",  // Unique name for the field
                type: "string",  // The field type
                title: "Hero Heading",  // Display title for the field
                description: "The main heading text displayed in the hero section of the homepage.",  // Field description
                
              },
              {
                name: "buttonText",  // Unique name for the field
                type: "string",  // The field type
                title: "Button Text",  // Display title for the field
                description: "The text that appears on the main button in the hero section.",  // Field description
               
              }
            ],
}


















// const homepageSchema = {
//     name: "homepage",  // Unique name for this schema
//     title: "Homepage Schema",  // Title for the schema (display name)
//     type: "object",  // Type of schema (object here)
//     fields: [  // Use "fields" as an array to define the individual fields
//       {
//         name: "heroHeading",  // Unique name for the field
//         type: "string",  // The field type
//         title: "Hero Heading",  // Display title for the field
//         description: "The main heading text displayed in the hero section of the homepage.",  // Field description
        
//       },
//       {
//         name: "buttonText",  // Unique name for the field
//         type: "string",  // The field type
//         title: "Button Text",  // Display title for the field
//         description: "The text that appears on the main button in the hero section.",  // Field description
       
//       }
//     ],
//     required: ["heroHeading", "buttonText"],  // Required fields for this schema
//   };
  
//   export default homepageSchema;
  