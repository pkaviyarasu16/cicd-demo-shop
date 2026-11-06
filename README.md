# cicd-demo-shop

A tiny shop used to demo a CI/CD pipeline (for an ops0 explainer reel).

Every push to `main` runs the same steps in GitHub Actions:

1. **run tests**: `npm test` (Node's built-in test runner)
2. **build image**: a Docker image, pushed to GitHub Container Registry
3. **deploy**: after approval, rolled out to a throwaway Kubernetes cluster (kind) with readiness checks
