import express from 'express';
import logger from './utils/logger';
import githubRepoRouter from './router/index';

const app = express();
const PORT = process.env.PORT || 3000;

const githubRepoRouterInstance = githubRepoRouter();
app.use('/repos', githubRepoRouterInstance);

const server = app.listen(PORT, () => {
  logger.info(`Express server listening on port ${PORT}`);
});
