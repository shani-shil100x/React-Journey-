const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};


// Object.entries(conf).forEach(([key, value]) => {
//   if (!value || value === "undefined") {
//     console.error(`❌ Missing environment variable: ${key}`);
//   } else {
//     console.log(`✅ ${key}:`, value);
//   }
// });

export default conf;
