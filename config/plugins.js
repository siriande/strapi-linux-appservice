export default ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-azure',
      providerOptions: {
        endpoint: env('AZURE_EMAIL_SERVICE_ENDPOINT'),
      },
      settings: {
        defaultFrom: env('FROM_EMAIL'),
      },
    },
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("STORAGE_ACCOUNT_NAME"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        containerName: env("BLOB_CONTAINER_NAME"),
        defaultPath: "uploads",
      },
    },
  },
});
