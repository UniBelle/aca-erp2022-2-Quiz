
export interface Question {
    id: number;
    questionText: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      questionText: "What is the git command that downloads your repository from GitHub to your computer?",
      options: ["git push", "git commit", "git fork", "git commit"],
      correctAnswerIndex: 2,
      explanation: "The `git clone' command downloads a repository from GitHub (or any remote repository) to your local machine. It creates a new directory, initializes a Git repository, and downloads all the repository's data."
    },
    {
      id: 2,
      questionText: "What is the command to clone a repository?",
      options: ["git clone <repo-url>", "git init", "git commit", "git push"],
      correctAnswerIndex: 0,
      explanation: "The `git clone <repo-url>` command is used to clone a repository into a new directory."
    },
    {
      id: 3,
      questionText: "How do you create a new branch in Git?",
      options: ["git branch new-branch", "git new-branch", "git init new-branch", "git checkout new-branch"],
      correctAnswerIndex: 0,
      explanation: "The `git branch new-branch` command is used to create a new branch named 'new-branch'."
    },
    {
      id: 4,
      questionText: "Which command is used to stage changes for a commit?",
      options: ["git add .", "git commit", "git push", "git status"],
      correctAnswerIndex: 0,
      explanation: "The `git add .` command stages all changes in the current directory for the next commit."
    },
    {
      id: 5,
      questionText: "How can you view the commit history in Git?",
      options: ["git logs", "git history", "git commit", "git log"],
      correctAnswerIndex: 2,
      explanation: "The git commit command captures a snapshot of the changes made and saves it to the version history with a unique ID."
    },
    {
        id: 6,
        questionText: "What does `git status` do?",
        options: ["Displays the state of the working directory and staging area", "Commits changes to the repository", "Pushes changes to a remote repository", "Shows the commit history"],
        correctAnswerIndex: 0,
        explanation: "The `git status` command displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git."
      },
      {
        id: 7,
        questionText: "What is the purpose of `git init`?",
        options: ["To initialize a new Git repository", "To clone a repository", "To commit changes", "To stage changes"],
        correctAnswerIndex: 0,
        explanation: "The `git init` command initializes a new Git repository in the current directory."
      },
      {
        id: 8,
        questionText: "How do you commit changes in Git?",
        options: ["git add", "git commit", "git push", "git init"],
        correctAnswerIndex: 1,
        explanation: "The `git commit` command is used to save your changes to the local repository."
      },
      {
        id: 9,
        questionText: "Which command updates your local repository to the latest commit?",
        options: ["git fetch", "git pull", "git merge", "git rebase"],
        correctAnswerIndex: 1,
        explanation: "The `git pull` command fetches changes from the remote repository and merges them into your local repository."
      },
      {
        id: 10,
        questionText: "What does `git push` do?",
        options: ["Updates your local repository with changes from the remote repository", "Sends your committed changes to the remote repository", "Stages your changes for commit", "Displays the commit history"],
        correctAnswerIndex: 1,
        explanation: "The `git push` command sends your committed changes to the remote repository."
      },
      {
        id: 11,
        questionText: "How do you view the commit history?",
        options: ["git status", "git log", "git diff", "git show"],
        correctAnswerIndex: 1,
        explanation: "The `git log` command shows the commit history for the repository."
      },
      {
        id: 12,
        questionText: "What is a merge conflict?",
        options: ["When two branches merge without any issues", "When there are competing changes in a file that need to be resolved", "When a branch is deleted", "When a commit fails"],
        correctAnswerIndex: 1,
        explanation: "A merge conflict occurs when there are competing changes in the same part of a file and Git cannot automatically resolve them."
      },
      {
        id: 13,
        questionText: "How do you resolve a merge conflict?",
        options: ["By deleting the conflicting file", "By choosing which changes to keep and committing the resolution", "By running git init", "By pushing changes to the remote repository"],
        correctAnswerIndex: 1,
        explanation: "To resolve a merge conflict, you need to manually edit the conflicting files to choose which changes to keep and then commit the resolution."
      },
      {
        id: 14,
        questionText: "What is a remote repository?",
        options: ["A repository on your local machine", "A repository hosted on the internet or network", "A backup of your repository", "A branch of your repository"],
        correctAnswerIndex: 1,
        explanation: "A remote repository is a Git repository that is hosted on the internet or a network."
      },
      {
        id: 15,
        questionText: "Which command fetches changes from the remote repository but doesn't merge them?",
        options: ["git fetch", "git pull", "git merge", "git clone"],
        correctAnswerIndex: 0,
        explanation: "The `git fetch` command downloads changes from the remote repository but doesn't merge them into your local branch."
      },
      {
        id: 16,
        questionText: "How do you discard changes in the working directory?",
        options: ["git reset", "git revert", "git checkout", "git clean"],
        correctAnswerIndex: 2,
        explanation: "The `git checkout` command can be used to discard changes in the working directory by checking out a file from the index or a specific commit."
      },
      {
        id: 17,
        questionText: "What does `git remote -v` do?",
        options: ["Views the remote repository", "Views the commit history", "Views the verbose output of remote connections", "Views the status of your working directory"],
        correctAnswerIndex: 2,
        explanation: "The `git remote -v` command shows the URLs that Git has stored for the remote repository."
      },
      {
        id: 18,
        questionText: "How do you create a tag in Git?",
        options: ["git tag <tagname>", "git branch <tagname>", "git commit -m <tagname>", "git push <tagname>"],
        correctAnswerIndex: 0,
        explanation: "The `git tag <tagname>` command is used to create a tag in Git."
      },
      {
        id: 19,
        questionText: "What is the difference between `git merge` and `git rebase`?",
        options: ["`git merge` combines branches, `git rebase` rewrites commit history", "`git merge` rewrites commit history, `git rebase` combines branches", "`git merge` deletes branches, `git rebase` creates branches", "`git merge` creates tags, `git rebase` creates branches"],
        correctAnswerIndex: 0,
        explanation: "`git merge` combines branches, while `git rebase` rewrites commit history to create a linear sequence of commits."
      },
      {
        id: 20,
        questionText: "What is `git stash` used for?",
        options: ["To store uncommitted changes temporarily", "To delete uncommitted changes", "To commit changes", "To push changes to the remote repository"],
        correctAnswerIndex: 0,
        explanation: "The `git stash` command is used to save uncommitted changes temporarily and clean your working directory."
      },
      {
        id: 21,
        questionText: "How do you apply stashed changes?",
        options: ["git stash apply", "git stash pop", "git stash save", "git stash list"],
        correctAnswerIndex: 0,
        explanation: "The `git stash apply` command is used to reapply stashed changes to your working directory."
      }
  ];
  