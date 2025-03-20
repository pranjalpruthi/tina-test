import { createClient } from '@clickhouse/client';
export const clickhouse = createClient({ host: process.env.CLICKHOUSE_HOST });
