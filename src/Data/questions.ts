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
      explanation: "The git clone <repo-url> command is used to clone a repository into a new directory."
    },
    {
      id: 3,
      questionText: "How do you create a new branch in Git?",
      options: ["git branch new-branch", "git new-branch", "git init new-branch", "git checkout new-branch"],
      correctAnswerIndex: 0,
      explanation: "The git branch new-branch command is used to create a new branch named 'new-branch'."
    },
    {
      id: 4,
      questionText: "Which command is used to stage changes for a commit?",
      options: ["git add .", "git commit", "git push", "git status"],
      correctAnswerIndex: 0,
      explanation: "The git add . command stages all changes in the current directory for the next commit."
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
        questionText: "What does git status do?",
        options: ["Displays the state of the working directory and staging area", "Commits changes to the repository", "Pushes changes to a remote repository", "Shows the commit history"],
        correctAnswerIndex: 0,
        explanation: "The git status command displays the state of the working directory and the staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git."
      },
      {
        id: 7,
        questionText: "What is the purpose of git init?",
        options: ["To initialize a new Git repository", "To clone a repository", "To commit changes", "To stage changes"],
        correctAnswerIndex: 0,
        explanation: "The git init command initializes a new Git repository in the current directory."
      },
      {
        id: 8,
        questionText: "How do you commit changes in Git?",
        options: ["git add", "git commit", "git push", "git init"],
        correctAnswerIndex: 1,
        explanation: "The git commit command is used to save your changes to the local repository."
      },
      {
        id: 9,
        questionText: "Which command updates your local repository to the latest commit?",
        options: ["git fetch", "git pull", "git merge", "git rebase"],
        correctAnswerIndex: 1,
        explanation: "The git pull command fetches changes from the remote repository and merges them into your local repository."
      },
      {
        id: 10,
        questionText: "What does git push do?",
        options: ["Updates your local repository with changes from the remote repository", "Sends your committed changes to the remote repository", "Stages your changes for commit", "Displays the commit history"],
        correctAnswerIndex: 1,
        explanation: "The git push command sends your committed changes to the remote repository."
      },
      {
        id: 11,
        questionText: "How do you view the commit history?",
        options: ["git status", "git log", "git diff", "git show"],
        correctAnswerIndex: 1,
        explanation: "The git log command shows the commit history for the repository."
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
        explanation: "The git fetch command downloads changes from the remote repository but doesn't merge them into your local branch."
      },
      {
        id: 16,
        questionText: "How do you discard changes in the working directory?",
        options: ["git reset", "git revert", "git checkout", "git clean"],
        correctAnswerIndex: 2,
        explanation: "The git checkout command can be used to discard changes in the working directory by checking out a file from the index or a specific commit."
      },
      {
        id: 17,
        questionText: "What does git remote -v do?",
        options: ["Views the remote repository", "Views the commit history", "Views the verbose output of remote connections", "Views the status of your working directory"],
        correctAnswerIndex: 2,
        explanation: "The git remote -v command shows the URLs that Git has stored for the remote repository."
      },
      {
        id: 18,
        questionText: "How do you create a tag in Git?",
        options: ["git tag <tagname>", "git branch <tagname>", "git commit -m <tagname>", "git push <tagname>"],
        correctAnswerIndex: 0,
        explanation: "The git tag <tagname> command is used to create a tag in Git."
      },
      {
        id: 19,
        questionText: "What is the difference between git merge and git rebase?",
        options: ["git merge combines branches, git rebase rewrites commit history", "git merge rewrites commit history, git rebase combines branches", "git merge deletes branches, git rebase creates branches", "git merge creates tags, git rebase creates branches"],
        correctAnswerIndex: 0,
        explanation: "git merge combines branches, while git rebase rewrites commit history to create a linear sequence of commits."
      },
      {
        id: 20,
        questionText: "What is git stash used for?",
        options: ["To store uncommitted changes temporarily", "To delete uncommitted changes", "To commit changes", "To push changes to the remote repository"],
        correctAnswerIndex: 0,
        explanation: "The git stash command is used to save uncommitted changes temporarily and clean your working directory."
      },
      {
        id: 21,
        questionText: "How do you apply stashed changes?",
        options: ["git stash apply", "git stash pop", "git stash save", "git stash list"],
        correctAnswerIndex: 0,
        explanation: "The git stash apply command is used to reapply stashed changes to your working directory."
      },
      {
        id: 22,
        questionText: "Which of the following best describes the purpose of a Git branching strategy in a large development team?",
        options: [
          "To ensure that only one developer can work on the codebase at a time.",
          "To allow multiple developers to work on the same codebase concurrently while maintaining a clear history of changes.",
          "To permanently lock down the main branch to prevent any future changes.",
          "To duplicate the entire repository for each developer, ensuring complete isolation of work."
        ],
        correctAnswerIndex: 1,
        explanation: "A Git branching strategy allows multiple developers to work on the same codebase concurrently while maintaining a clear history of changes. It helps manage feature development, bug fixes, and release preparation efficiently."
      },
      {
        id: 23,
        questionText: "When contributing to an open-source project on GitHub, what is the recommended process to suggest changes and collaborate with maintainers?",
        options: [
          "Directly push changes to the main branch of the project.",
          "Create a fork of the repository, make changes in a feature branch, and then submit a pull request.",
          "Email the maintainer with the code changes.",
          "Make changes in your local copy and wait for the maintainer to find and integrate them."
        ],
        correctAnswerIndex: 1,
        explanation: "The recommended process is to create a fork of the repository, make changes in a feature branch, and then submit a pull request. This allows the maintainers to review and discuss the changes before merging them into the main codebase."
      },
      {
        id: 24,
        questionText: "Which of the following statements about Git submodules is accurate?",
        options: [
          "Git submodules are used to include a repository within another repository, and changes to the submodule are tracked independently.",
          "Git submodules automatically merge changes from the main repository to the submodule.",
          "Git submodules are merged with the parent repository and lose their independent history.",
          "Git submodules are used to clone repositories without preserving their history."
        ],
        correctAnswerIndex: 0,
        explanation: "Git submodules are used to include a repository within another repository, and changes to the submodule are tracked independently. This allows for modular development while maintaining separate version histories for the submodules."
      },
      {
        id: 25,
        questionText: "In GitHub, what is the primary purpose of using a 'protected branch'?",
        options: [
          "To prevent any further development on the branch.",
          "To enforce certain rules such as requiring status checks before merging, preventing force pushes, and requiring code reviews.",
          "To duplicate the branch into multiple repositories.",
          "To allow any user to push changes to the branch without restrictions."
        ],
        correctAnswerIndex: 1,
        explanation: "A 'protected branch' in GitHub is used to enforce certain rules such as requiring status checks before merging, preventing force pushes, and requiring code reviews. This helps ensure code quality and stability in important branches like the main or master branch."
      },
      {
        id: 26,
        questionText: "What command is used to clone a repository?",
        options: ["git copy <repository-url>", "git clone <repository-url>", "git fork <repository-url>", "git pull <repository-url>"],
        correctAnswerIndex: 1,
        explanation: "The git clone <repository-url> command is used to clone a repository into a new directory."
      },
      {
        id: 27,
        questionText: "What is a fork in GitHub?",
        options: ["A copy of a repository under a different account", "A branch in a repository", "A tag in a repository", "A commit in a repository"],
        correctAnswerIndex: 0,
        explanation: "A fork is a copy of a repository that is made on a different account, allowing you to freely make changes without affecting the original project."
      },
      {
        id: 28,
        questionText: "Which command is used to create a new branch?",
        options: ["git branch <branch-name>", "git create <branch-name>", "git checkout <branch-name>", "git switch <branch-name>"],
        correctAnswerIndex: 0,
        explanation: "The git branch <branch-name> command creates a new branch with the specified name."
      },
      {
        id: 29,
        questionText: "How do you stage all changes for commit?",
        options: ["git add .", "git commit -m \"message\"", "git stage all", "git push"],
        correctAnswerIndex: 0,
        explanation: "The git add . command stages all changes in the working directory for the next commit."
      },
      {
        id: 30,
        questionText: "Which command is used to push changes to a remote repository?",
        options: ["git send", "git push", "git upload", "git update"],
        correctAnswerIndex: 1,
        explanation: "The git push command uploads local repository content to a remote repository."
      },
      {
        id: 31,
        questionText: "What is the purpose of a pull request?",
        options: ["To fetch changes from a remote repository", "To propose changes to a repository", "To merge changes into the master branch", "To delete a branch"],
        correctAnswerIndex: 1,
        explanation: "A pull request is a way to propose changes to a repository, allowing maintainers to review and merge them."
      },
      {
        id: 32,
        questionText: "Which command is used to merge branches?",
        options: ["git merge <branch-name>", "git join <branch-name>", "git integrate <branch-name>", "git combine <branch-name>"],
        correctAnswerIndex: 0,
        explanation: "The git merge <branch-name> command merges the specified branch into the current branch."
      },
      {
        id: 33,
        questionText: "How do you check the status of your working directory and staging area?",
        options: ["git check", "git status", "git verify", "git inspect"],
        correctAnswerIndex: 1,
        explanation: "The git status command displays the state of the working directory and the staging area."
      },
      {
        id: 34,
        questionText: "What command is used to view the commit history?",
        options: ["git log", "git history", "git commits", "git track"],
        correctAnswerIndex: 0,
        explanation: "The git log command shows the commit history for the repository."
      },
      {
        id: 35,
        questionText: "Which file is used to ignore specific files and directories in Git?",
        options: [".gitconfig", ".gitignore", "ignore.txt", "config.json"],
        correctAnswerIndex: 1,
        explanation: "The .gitignore file is used to specify files and directories that Git should ignore."
      },
      {
        id: 36,
        questionText: "What command do you use to create a new local repository?",
        options: ["git init", "git create", "git start", "git new"],
        correctAnswerIndex: 0,
        explanation: "The git init command creates a new local Git repository."
      },
      {
        id: 37,
        questionText: "Which command is used to fetch changes from a remote repository and merge them into your current branch?",
        options: ["git fetch", "git pull", "git merge", "git sync"],
        correctAnswerIndex: 1,
        explanation: "The git pull command fetches changes from a remote repository and merges them into the current branch."
      },
      {
        id: 38,
        questionText: "How do you discard all local changes in your working directory?",
        options: ["git undo", "git revert", "git reset --hard", "git discard"],
        correctAnswerIndex: 2,
        explanation: "The git reset --hard command discards all local changes in the working directory."
      },
      {
        id: 39,
        questionText: "Which command is used to set up a remote repository?",
        options: ["git remote set-url", "git remote add", "git remote setup", "git connect"],
        correctAnswerIndex: 1,
        explanation: "The git remote add command adds a remote repository to your local repository."
      },
      {
        id: 40,
        questionText: "What does the HEAD reference in Git?",
        options: ["The latest commit in the current branch", "The first commit in the repository", "The most recent branch created", "The main branch of the repository"],
        correctAnswerIndex: 0,
        explanation: "The HEAD reference points to the latest commit in the current branch."
      },
      {
        id: 41,
        questionText: "How do you rename a branch?",
        options: ["git branch -m <new-branch-name>", "git rename <new-branch-name>", "git branch --rename <new-branch-name>", "git update-branch <new-branch-name>"],
        correctAnswerIndex: 0,
        explanation: "The git branch -m <new-branch-name> command renames the current branch to the specified new name."
      },
      {
        id: 42,
        questionText: "What is the purpose of the git rebase command?",
        options: ["To move or combine a sequence of commits to a new base commit", "To delete a branch", "To create a new repository", "To merge branches"],
        correctAnswerIndex: 0,
        explanation: "The git rebase command is used to move or combine a sequence of commits to a new base commit."
      },
      {
        id: 43,
        questionText: "Which command is used to remove a file from the staging area?",
        options: ["git remove <file>", "git unstage <file>", "git rm --cached <file>", "git delete <file>"],
        correctAnswerIndex: 2,
        explanation: "The git rm --cached <file> command removes a file from the staging area without deleting it from the working directory."
      },
      {
        id: 44,
        questionText: "What is the difference between git fetch and git pull?",
        options: ["git fetch updates your local repository, git pull updates your remote repository", "git fetch downloads objects and refs, git pull downloads and merges", "git fetch only downloads branches, git pull downloads branches and tags", "git fetch is used for cloning, git pull is used for branching"],
        correctAnswerIndex: 1,
        explanation: "The git fetch command downloads objects and refs from a remote repository, while git pull downloads and merges changes into the current branch."
      },
      {
        id: 45,
        questionText: "How do you apply a commit from one branch into another branch without merging?",
        options: ["git cherry-pick <commit>", "git apply <commit>", "git import <commit>", "git select <commit>"],
        correctAnswerIndex: 0,
        explanation: "The git cherry-pick <commit> command applies a commit from one branch into another branch without merging."
      },
      {
        id: 46,
        questionText: "Which command is used to show changes between commits, commit, and working tree, etc.?",
        options: ["git diff", "git show", "git compare", "git changes"],
        correctAnswerIndex: 0,
        explanation: "The git diff command shows changes between commits, commit and working tree, etc."
      },
      {
        id: 47,
        questionText: "How do you create a tag in Git?",
        options: ["git tag <tagname>", "git label <tagname>", "git mark <tagname>", "git create-tag <tagname>"],
        correctAnswerIndex: 0,
        explanation: "The git tag <tagname> command creates a new tag with the specified name."
      },
      {
        id: 48,
        questionText: "Which command is used to stash changes?",
        options: ["git store", "git stash", "git save", "git hide"],
        correctAnswerIndex: 1,
        explanation: "The git stash command stashes changes in a dirty working directory away."
      },
      {
        id: 49,
        questionText: "How do you view the current branch you are on?",
        options: ["git show-branch", "git current-branch", "git branch --show-current", "git branch"],
        correctAnswerIndex: 2,
        explanation: "The git branch --show-current command shows the name of the current branch."
      },
      {
        id: 50,
        questionText: "What does the git reset command do?",
        options: ["It discards changes in the working directory", "It moves the current branch pointer to a specified commit", "It updates the remote repository", "It merges branches"],
        correctAnswerIndex: 1,
        explanation: "The git reset command moves the current branch pointer to a specified commit, and can optionally reset the index and working directory to match."
      }
  ];
  
