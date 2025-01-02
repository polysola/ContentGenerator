export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://xrpdb_owner:eb8Kz5jhvwUI@ep-gentle-star-a5womvhf.us-east-2.aws.neon.tech/xrpdb?sslmode=require",
    connectionString:
      "postgresql://xrpdb_owner:eb8Kz5jhvwUI@ep-gentle-star-a5womvhf.us-east-2.aws.neon.tech/xrpdb?sslmode=require",
  },
};
