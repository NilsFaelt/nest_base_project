interface ConfigurationValuesInterface {
  http: {
    host: string;
    port: number;
  };
  db: {
    postgres: {
      url: string;
      port: number;
      database: string;
      password: string;
      user: string;
    };
    sqlite: {
      database: string;
    };
  };
  prisma: { url: string };
}

export type ConfigurationInterface<
  K extends keyof ConfigurationValuesInterface,
> = ConfigurationValuesInterface[K];
