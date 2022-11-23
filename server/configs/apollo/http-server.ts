import { Server, createServer } from 'http';
import express, { Express as ExpressModel } from 'express';
import cors from 'cors';
import corsOpts from './cors';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

export const app: ExpressModel = express();

app.use(graphqlUploadExpress());
app.use(cors(corsOpts));

const httpServer: Server = createServer(app);
export default httpServer;
