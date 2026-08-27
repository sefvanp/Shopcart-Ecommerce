#!/usr/bin/env bash
# Watch project files and automatically commit, push, and deploy to Vercel.
# WARNING: This will create commits and push to the current branch. Use with caution.

echo "Starting auto-deploy watcher. Press Ctrl+C to stop."

CMD="git add -A && git commit -m \"auto-deploy: $(date +'%Y-%m-%d %H:%M:%S')\" || true && git push || true && npx vercel --prebuilt --confirm || true"

npx chokidar "app/**" "components/**" "lib/**" "actions/**" "pages/**" "package.json" -c "$CMD"
