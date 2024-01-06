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
    };
    sqlite: {
      database: string;
    };
  };
}

export type ConfigurationInterface<
  K extends keyof ConfigurationValuesInterface,
> = ConfigurationValuesInterface[K];
