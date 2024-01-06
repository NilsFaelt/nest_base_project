import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'configuration.yaml';
const isDevelopment = process.env.NODE_ENV === 'development';

export default () => {
  const directory = isDevelopment
    ? join(__dirname, '..', '..', 'configuration', YAML_CONFIG_FILENAME)
    : join(__dirname, YAML_CONFIG_FILENAME);
  return yaml.load(readFileSync(directory, 'utf-8')) as Record<string, any>;
};
