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
      }
});
