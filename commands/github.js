const Github = require("github");
const moment = require("moment");
const github = new Github();
exports.run = async (client, message, args, level) => {
    const Github = require("github");
    const github = new Github();
    github.authenticate({
      type: "oauth",
      token: process.env.GITHUBAPI
    });
    
    // Get latest commits from Github
        let commitsPretty = '';
        try {
          const commits = await github.repos.getCommits({
            repo: 'cryptide',
            owner: 'ur-mums-a-trap21',
            sha: 'master',
            per_page: 4
          });
          for (const commit of commits.data) {
            const ago = moment(commit.commit.committer.date).fromNow();
            commitsPretty += `[${commit.author.login}](${commit.author.html_url}) - ${commit.commit.message} (${ago})\n`;
          }
        } catch (err) {
          console.error(err);
          commitsPretty = 'N/A';
        }
}
exports.conf = {
    aliases: [],
    permLevel: "User"
};
      
exports.help = {
    name: 'github',
    category: "Misc",
    description: 'View latest github commits',
    usage: 'github'
};