import  { Request, Response,Router } from 'express';
import { fetchGitHubRepos } from '../utils/githubApi';
import logger from '../utils/logger';
import { ERRORMESSAGE } from '../constants/errorMessages';

const githubRepoRouter = (): Router => {
    const router: Router = Router();
  
    router.get('/get-github', async (_req: Request, res: Response) => {
      try {
        const topRepos = await fetchGitHubRepos();
        res.json(topRepos);
      } catch (error) {
        logger.error(`Error: ${error}`);
        res.status(500).json({ error: ERRORMESSAGE.ERROR_FETCH_REPOSITORIES });
      }
    });
  
    return router;
  };
  
  export default githubRepoRouter;