## Github Action Workflow

### Pre-Reqquisites

#### Github

- Github Personal Access Token (Generate token from github with required permissions)
- Settings > Developer Settings > Personal access tokens
- Important: `Set expiration date!` After expiration you will have to create new one!

#### Dockerhub

- Dockerhub Personal Access Token
- Dockerhub username

#### Kubernetes

- Create GCP Service account
- Create IAM Role
- Attach IAM Role
- gcloud projects add-iam-policy-binding infernos-banzaicloud-k8s --member=serviceAccount:gh-actions@infernos-banzaicloud-k8s.iam.gserviceaccount.com\n\n --role=projects/infernos-banzaicloud-k8s/roles/github_actions_marvel_kube_deployer\n
- Create ClusterRole
- Create ClusterRolebinding
- Generate JSON Key for Service Account
- Project Name e.g. “hello-world-stackos-infra-node-4”
- Namespace

#### Setup GitHub Actions for Kubernetes Deployment

- Ref: https://github.com/google-github-actions/get-gke-credentials#authenticating-via-service-account-key-json

#### Once getting all of them put them in github action secrets

##### ORGANIZATION LEVEL SECRETS

NAMESPACE
PROJECT_NAME

##### REPOSITORY LEVEL SECRETS

DOCKER_HUB_TOKEN
DOCKER_HUB_USERNAME
GCP_CREDENTIALS
GIT_TOKEN
