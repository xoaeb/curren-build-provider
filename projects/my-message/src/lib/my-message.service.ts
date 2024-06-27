import { Injectable } from '@angular/core';
import * as yaml from 'js-yaml';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MyMessageService {
  constructor() {}
  private githubApiBaseUrl = 'https://api.github.com';

  async getCurrentBuildVersion(owner: string , repo: string, token:string): Promise<string> {
    try {
      const url = `${this.githubApiBaseUrl}/repos/${owner}/${repo}/actions/runs?per_page=1`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      const workflowRun = response.data.workflow_runs[0];
      const buildVersion = workflowRun?.head_branch || 'Version not found';

      return buildVersion;
    } catch (error) {
      console.error('Error fetching build version from GitHub:', error);
      return 'Error fetching version';
    }
  }
}
