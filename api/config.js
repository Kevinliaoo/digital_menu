import { config as env_config } from 'dotenv'; 

env_config();

export const config = {
    PORT: process.env.PORT || 3002, 
    JWT_SECRET: 'fedniqfi3hefuivewns122832u38',
}