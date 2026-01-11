git switch template-main
git pull
git pull --ff-only upstream main
git push origin template-main
git switch -

git rebase template-main

# git fetch upstream
# git checkout template-main
# git reset --hard upstream/main
# git push origin template-main --force-with-lease
