import axios from 'axios';
import { CONSTANTS } from '../constants/global';
import { ERRORMESSAGE } from '../constants/errorMessages';
import logger from './logger'; 
import { GitHubRepository } from '../types/githubRepository'; // Importa la interfaz desde el nuevo archivo

export const fetchGitHubRepos = async (): Promise<GitHubRepository[]> => {
  try {
    const response = await axios.get(CONSTANTS.GITHUB_API_URL, {
      headers: {
        'User-Agent': CONSTANTS.USER_AGENT,
      },
      params: {
        per_page: CONSTANTS.PER_PAGE,
        fields: CONSTANTS.FIELDS,
      },
    });

    logger.info(`Response status: ${response.status}`);

    const repos = response.data.map((repo: any) => ({
      id: repo.id,
      node_id: repo.node_id,
      name: repo.name,
      full_name: repo.full_name,
    }));

    logger.info(`Fetched ${repos.length} repositories`);

    return repos;
    
  } catch (error) {
    logger.error('Request error:', error);
    throw new Error(ERRORMESSAGE.ERROR_FETCH_REPOSITORIES);
  }
};
