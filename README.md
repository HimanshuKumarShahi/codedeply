# CodeDeploy

> A learning-focused, self-hosted mini deployment platform inspired by Vercel and Netlify.

CodeDeploy is a real-world educational deployment platform built to understand how modern deployment platforms work internally.

The project takes a GitHub repository, creates a deployment job, processes that job through a worker, builds the application inside Docker, starts an isolated runtime container, captures build logs, stores deployment state, and exposes a local deployment URL.

The main goal is not to build a production competitor to Vercel.

The goal is to learn:

- System design
- Distributed systems
- Queues
- Workers
- Docker
- Build isolation
- GitHub integration
- Webhooks
- Deployment lifecycle
- Real-time logs
- Database design
- Authentication
- Environment variables
- Resource cleanup
- Observability
- Scaling

---


# What is CodeDeploy?

CodeDeploy is a small deployment platform.

A user connects a GitHub repository to a project and triggers a deployment.

The platform performs approximately this process:

```text
GitHub Repository
       |
       v
Deployment Request
       |
       v
Next.js Control Plane
       |
       v
Supabase PostgreSQL
       |
       v
Redis Queue
       |
       v
Worker
       |
       v
GitHub Source Download
       |
       v
Project Detection
       |
       v
Docker Build
       |
       v
Docker Image
       |
       v
Runtime Container
       |
       v
Health Check
       |
       v
Live Deployment URL

CodeDeploy is primarily an **educational system-design project** that will gradually evolve from a simple local MVP into a distributed deployment platform.

---

# 1. Project Goals

The platform should eventually allow a user to:

1. Sign up / log in
2. Connect their GitHub account
3. Select a GitHub repository
4. Create a project
5. Configure the project
6. Deploy the repository
7. Receive a deployment job
8. Queue the job
9. Process the job using a worker
10. Clone the repository
11. Build the application in an isolated environment
12. Capture build logs
13. Store the generated artifact
14. Deploy the artifact
15. Generate a live deployment URL
16. View deployment status
17. View deployment history
18. Redeploy previous commits
19. Roll back deployments
20. Manage environment variables
21. Eventually support preview deployments
22. Eventually support custom domains

---

# 2. Core Architecture

CodeDeploy is divided into two major parts.

## Control Plane

The control plane decides **what should happen**.

```text
Browser
   ↓
Next.js
   ↓
Authentication
   ↓
PostgreSQL
   ↓
GitHub API
   ↓
Deployment API
   ↓
Queue

```

Responsibilities:

* Authentication
* Users
* Projects
* GitHub connections
* Deployment metadata
* Deployment state
* API
* Configuration
* Queue management
* Dashboard

---

## Data Plane

The data plane performs the actual work.

```text
Queue
   ↓
Worker
   ↓
Repository
   ↓
Docker
   ↓
Build
   ↓
Artifact
   ↓
Runtime
   ↓
Internet
```

Responsibilities:

* Pick deployment jobs
* Clone repositories
* Install dependencies
* Run builds
* Capture logs
* Generate artifacts
* Deploy artifacts
* Run applications
* Health checks
* Cleanup

### Important Principle

> The control plane decides what should happen.
> The data plane performs the work.

---

# 3. Technology Stack


## Frontend / Control Plane

| Technology   | Purpose                                       |
| ------------ | --------------------------------------------- |
| Next.js      | Web application and server-side control plane |
| React        | UI                                            |
| TypeScript   | Type safety                                   |
| Tailwind CSS | Styling                                       |
| shadcn/ui    | UI components                                 |
| Turborepo    | Monorepo orchestration                        |
| pnpm         | Package management                            |



## Backend

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| Supabase Auth       | Authentication              |
| Supabase PostgreSQL | Main database               |
| Supabase Realtime   | Live deployment status/logs |
| Redis               | Deployment queue            |
| Docker              | Build and runtime isolation |
| GitHub API          | Repository integration      |
| GitHub OAuth        | Authentication              |
| Node.js             | Worker runtime              |


## Deployment Infrastructure

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| GitHub           | Source repositories         |
| GitHub Webhooks  | Deployment triggers         |
| Redis / Upstash  | Job queue                   |
| Worker           | Deployment processing       |
| Docker           | Build isolation             |
| Artifact storage | Build output                |
| Runtime          | Serve deployed applications |

## Observability

| Technology          | Intended use                             |
| ------------------- | ---------------------------------------- |
| MongoDB             | Large-scale deployment events/build logs |
| Sentry              | Error tracking                           |
| Redis Streams       | Reliable job processing                  |
| GitHub Webhooks     | Automatic deployments                    |
| Object Storage      | Build artifacts/log archives             |
| Reverse Proxy       | Routing deployment URLs                  |
| Caddy/Nginx/Traefik | HTTPS and routing                        |
| Kubernetes          | Large-scale orchestration                |


---
```
codedeply/
│
├── apps/
│   │
│   ├── web/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── proxy.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── worker/
│       ├── src/
│       │   ├── docker/
│       │   │   ├── build.ts
│       │   │   ├── runtime.ts
│       │   │   └── nextjs.Dockerfile
│       │   │
│       │   ├── deployments/
│       │   │   └── logs.ts
│       │   │
│       │   ├── github/
│       │   │   └── source.ts
│       │   │
│       │   ├── project/
│       │   │   ├── detect.ts
│       │   │   └── config.ts
│       │   │
│       │   ├── workspace/
│       │   │   └── cleanup.ts
│       │   │
│       │   ├── supabase.ts
│       │   └── index.ts
│       │
│       ├── test-build/
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   │
│   ├── queue/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── queue.ts
│   │   │   └── redis.ts
│   │   └── package.json
│   │
│   ├── types/
│   │   ├── src/
│   │   │   ├── deployment.ts
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── database/
│   ├── ui/
│   └── config/
│
├── docs/
│   ├── PDR.md
│   ├── architecture.md
│   └── decisions/
│
├── docker/
│   ├── redis/
│   └── ...
│
├── supabase/
│   ├── migrations/
│   └── seed.sql
│
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
├── .gitignore
└── README.md
```


# 4. Initial Architecture

The first version will intentionally be simple.

```text
                 ┌──────────────┐
                 │   Browser    │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │   Next.js    │
                 └──────┬───────┘
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
       ┌────────────┐      ┌────────────┐
       │ Supabase   │      │ PostgreSQL │
       │    Auth    │      │            │
       └────────────┘      └────────────┘
```

No worker, Docker build system, Redis, or runtime is required in Phase 1.

This is intentional.

---

# 5. Development Strategy

The project will be developed **one phase at a time**.

Each major phase should follow this cycle:

```text
Understand
   ↓
Design
   ↓
Implement
   ↓
Test
   ↓
Verify
   ↓
Document
   ↓
Move to next phase
```

Do not introduce infrastructure before understanding the problem it solves.

---

# 6. Project Phases

## Phase 0 — Project Planning

Status: 🟢 Planned

Objectives:

* Define product requirements
* Define architecture
* Define repository structure
* Define development strategy
* Define MVP boundaries

Files:

```text
docs/
├── PDR.md
└── architecture.md
```

---

# Phase 1 — Monorepo + Authentication + Database

Status: 🟡 In Progress

Goal:

Build the control-plane foundation.

Architecture:

```text
Browser
   ↓
Next.js
   ↓
Supabase Auth
   ↓
PostgreSQL
```

Tasks:

* [ ] pnpm setup
* [ ] Turborepo setup
* [ ] Monorepo structure
* [ ] Next.js application
* [ ] TypeScript
* [ ] Tailwind
* [ ] shadcn/ui
* [ ] Supabase project
* [ ] Supabase Auth
* [ ] Email authentication
* [ ] GitHub OAuth preparation
* [ ] Database schema
* [ ] `profiles` table
* [ ] Row Level Security
* [ ] Protected dashboard
* [ ] Login
* [ ] Signup
* [ ] Logout
* [ ] Auth session handling
* [ ] Basic tests

Expected result:

```text
User
 ↓
Login
 ↓
Supabase Auth
 ↓
Authenticated Dashboard
 ↓
PostgreSQL Profile
```

---

# Phase 2 — GitHub Integration

Status: ⚪ Not Started

Goal:

Allow users to connect GitHub and select repositories.

Architecture:

```text
User
 ↓
Next.js
 ↓
GitHub OAuth
 ↓
GitHub API
 ↓
Repositories
```

Tasks:

* [ ] GitHub OAuth
* [ ] GitHub connection
* [ ] Store GitHub account metadata
* [ ] Repository API
* [ ] Repository selection UI
* [ ] Project creation
* [ ] Repository → Project mapping

---

# Phase 3 — Projects + Deployment Database

Status: ⚪ Not Started

Goal:

Introduce deployment concepts.

Core entities:

```text
User
 ↓
Project
 ↓
Deployment
```

Initial tables:

```text
profiles
projects
github_connections
deployments
```

Deployment states:

```text
QUEUED
CLONING
INSTALLING
BUILDING
DEPLOYING
READY
FAILED
CANCELLED
```

Tasks:

* [ ] Projects table
* [ ] Deployments table
* [ ] Project dashboard
* [ ] Deployment history
* [ ] Deployment status
* [ ] Commit metadata
* [ ] RLS policies
* [ ] Tests

---

# Phase 4 — GitHub Webhooks

Status: ⚪ Not Started

Goal:

Automatically create deployments when code changes.

Architecture:

```text
GitHub
   ↓
Webhook
   ↓
Next.js API
   ↓
Validate webhook
   ↓
Create Deployment
   ↓
QUEUED
```

Tasks:

* [ ] GitHub webhook endpoint
* [ ] Webhook signature verification
* [ ] Push event handling
* [ ] Branch filtering
* [ ] Deployment creation
* [ ] Idempotency
* [ ] Webhook tests

---

# Phase 5 — Job Queue

Status: ⚪ Not Started

Goal:

Separate API requests from deployment execution.

Architecture:

```text
API
 ↓
Queue
 ↓
Worker
```

Initial implementation:

```text
DeploymentQueue
      │
      ├── InMemoryQueue
      │
      └── RedisQueue
```

Technology:

* Redis / Upstash

Important learning:

Why do we need a queue?

Because the API should not perform long-running builds.

Bad:

```text
HTTP Request
 ↓
Clone
 ↓
npm install
 ↓
Build
 ↓
Deploy
 ↓
HTTP Response
```

Better:

```text
HTTP Request
 ↓
Create Deployment
 ↓
Queue Job
 ↓
HTTP Response

Worker
 ↓
Process Job
```

---

# Phase 6 — Worker Architecture

Status: ⚪ Not Started

Goal:

Create the deployment worker.

Architecture:

```text
Queue
 ↓
Worker
 ↓
Deployment Processor
```

Worker responsibilities:

```text
Receive job
 ↓
Validate deployment
 ↓
Clone repository
 ↓
Prepare workspace
 ↓
Build
 ↓
Capture logs
 ↓
Create artifact
 ↓
Deploy
```

Eventually:

```text
apps/
├── web/
└── worker/
```

---

# Phase 7 — Docker Build System

Status: ⚪ Not Started

Goal:

Run user builds in isolated environments.

Architecture:

```text
Worker
 ↓
Docker
 ↓
Build Container
 ↓
Repository
 ↓
Install dependencies
 ↓
Build
 ↓
Artifact
```

Example:

```text
Deployment
     ↓
Docker Container
     ↓
npm install
     ↓
npm run build
     ↓
dist/
```

Learning objectives:

* Docker images
* Containers
* Isolation
* Resource limits
* Build timeouts
* Filesystem isolation
* Process isolation
* Container cleanup

Security becomes especially important here.

---

# Phase 8 — Build Logs

Status: ⚪ Not Started

Goal:

Make builds observable.

Architecture:

```text
Docker Build
     ↓
stdout / stderr
     ↓
Worker
     ↓
Log Storage
     ↓
Dashboard
```

Initially logs may be stored simply.

Later:

```text
MongoDB
```

can be introduced if log/event volume justifies a document-oriented store.

Important:

Do not introduce MongoDB merely because deployment platforms use multiple databases.

First understand the workload.

---

# Phase 9 — Deployment Runtime

Status: ⚪ Not Started

Goal:

Actually serve the built application.

Architecture:

```text
Artifact
   ↓
Runtime
   ↓
Port
   ↓
Reverse Proxy
   ↓
Internet
```

Example:

```text
Deployment
 ↓
Container
 ↓
Application
 ↓
localhost:3000
```

Eventually:

```text
https://deployment-id.codedeply.example
```

---

# Phase 10 — Deployment Dashboard + Realtime

Status: ⚪ Not Started

Goal:

Create a Vercel-like deployment experience.

Dashboard:

```text
Project
├── Production
├── Deployments
├── Logs
├── Settings
└── Environment Variables
```

Deployment page:

```text
Deployment
────────────────────────
Status: BUILDING

Clone       ✓
Install     ✓
Build       ●
Deploy      ○

Logs
────────────────────────
Installing dependencies...
Building application...
```

Potential technology:

```text
Supabase Realtime
```

---

# Phase 11 — Environment Variables + Rollback

Status: ⚪ Not Started

Features:

* [ ] Environment variables
* [ ] Production variables
* [ ] Preview variables
* [ ] Encrypted storage strategy
* [ ] Deployment-specific environment
* [ ] Redeploy
* [ ] Rollback
* [ ] Previous deployment activation

Architecture:

```text
Project
 ↓
Environment Variables
 ↓
Deployment
 ↓
Build
```

---

# Phase 12 — Security + Reliability + Scaling

Status: ⚪ Not Started

Topics:

* [ ] Authentication security
* [ ] Authorization
* [ ] PostgreSQL RLS
* [ ] GitHub webhook verification
* [ ] Container isolation
* [ ] Resource limits
* [ ] Build timeouts
* [ ] Rate limiting
* [ ] Retry strategy
* [ ] Dead-letter jobs
* [ ] Idempotency
* [ ] Queue reliability
* [ ] Worker concurrency
* [ ] Artifact cleanup
* [ ] Log retention
* [ ] Secrets management
* [ ] Abuse prevention

Scaling model:

```text
                 ┌── Worker 1
                 │
Queue ───────────┼── Worker 2
                 │
                 ├── Worker 3
                 │
                 └── Worker N
```

---

# Phase 13 — Advanced Features

Status: ⚪ Future

Possible features:

* [ ] Preview deployments
* [ ] Pull request deployments
* [ ] Custom domains
* [ ] HTTPS
* [ ] Deployment aliases
* [ ] Build caching
* [ ] Artifact caching
* [ ] CDN
* [ ] Multiple regions
* [ ] Team accounts
* [ ] RBAC
* [ ] Usage limits
* [ ] Billing
* [ ] Analytics
* [ ] Deployment metrics

These are intentionally outside the MVP.

---

# 7. MVP Definition

The first usable CodeDeploy MVP does NOT need everything.

MVP target:

```text
GitHub
   ↓
Webhook
   ↓
Next.js API
   ↓
Deployment Record
   ↓
Queue
   ↓
Worker
   ↓
Docker
   ↓
Build
   ↓
Artifact
   ↓
Runtime
   ↓
Live URL
```

The MVP should demonstrate the complete deployment lifecycle.

---

# 8. Database Evolution

## Phase 1

```text
auth.users
     │
     ▼
profiles
```

## Phase 2

```text
profiles
   │
   ├── github_connections
   │
   └── projects
```

## Phase 3

```text
projects
   │
   └── deployments
```

## Later

```text
projects
├── deployments
├── environment_variables
├── domains
└── ...
```

Logs/events may eventually use a separate storage system depending on scale.

---

# 9. Infrastructure Evolution

## Stage 1 — Local Development

```text
Laptop
├── Next.js
├── Supabase
└── GitHub
```

Cost target:

```text
₹0/month
```

No VM required.

---

## Stage 2 — Local Worker

```text
Cloud
├── Next.js
├── Supabase
└── GitHub

Local Machine
├── Worker
└── Docker
```

Still suitable for learning and development.

---

## Stage 3 — Small Deployment Server

```text
Cloud
├── Next.js
├── Supabase
├── Queue
└── GitHub

Server
├── Worker
├── Docker
└── Runtime
```

A small VM can be introduced only when required.

---

## Stage 4 — Distributed System

```text
                    ┌── Worker 1
                    ├── Worker 2
Queue ──────────────┼── Worker 3
                    └── Worker N

                         ↓

                 Artifact Storage

                         ↓

                 Runtime Cluster
```

This is a future learning target, not an MVP requirement.

---

# 10. Cost Strategy

Target during learning:

## ₹0/month

Use free tiers and local resources where practical.

Potential components:

| Component      | Initial Strategy                 |
| -------------- | -------------------------------- |
| Source code    | GitHub                           |
| Frontend       | Local development / free hosting |
| Database       | Supabase free tier               |
| Authentication | Supabase Auth                    |
| Queue          | Local implementation initially   |
| Redis          | Introduce later                  |
| Worker         | Local machine initially          |
| Docker         | Local Docker                     |
| Build machine  | Local machine                    |
| Logs           | Database initially               |
| Monitoring     | Free tier if useful              |
| VM             | Not required initially           |

### Important

Free-tier limits and pricing can change.

The architecture should therefore remain **provider-independent** wherever practical.

---

# 11. Why We Are Not Using Everything Immediately

CodeDeploy is an educational project.

Adding technologies without a problem to solve creates complexity without understanding.

For example:

### Don't start with:

```text
Next.js
+
Supabase
+
MongoDB
+
Redis
+
Kafka
+
Docker
+
Kubernetes
+
VM
+
CDN
```

Instead:

```text
Next.js
 ↓
Supabase
 ↓
PostgreSQL
```

Then introduce:

```text
Queue
```

when we have an asynchronous deployment problem.

Then:

```text
Worker
```

when the API should no longer execute builds.

Then:

```text
Docker
```

when isolation becomes necessary.

Then:

```text
Redis
```

when a real queue implementation is needed.

Then:

```text
MongoDB
```

if log/event workload actually benefits from it.

This keeps every architectural decision connected to a real problem.

---

# 12. Important Design Principles

## Principle 1 — Understand Before Scaling

Build the simplest working system first.

Then identify the bottleneck.

Then improve it.

---

## Principle 2 — Separate Control Plane and Data Plane

Control plane:

> What should happen?

Data plane:

> Actually perform the work.

---

## Principle 3 — Keep Infrastructure Replaceable

Use interfaces where appropriate.

Example:

```text
DeploymentQueue
├── InMemoryQueue
└── RedisQueue
```

Later:

```text
BuildExecutor
├── LocalExecutor
└── DockerExecutor
```

This allows us to learn locally before introducing infrastructure.

---

## Principle 4 — Security Is Part of the Architecture

User-controlled source code eventually runs inside CodeDeploy.

Therefore:

```text
User Code
    ↓
Isolation
    ↓
Resource Limits
    ↓
Timeout
    ↓
Cleanup
```

Docker is not automatically a complete security boundary. The final system must consider isolation, privileges, resource exhaustion, networking, secrets, and host security.

---

## Principle 5 — Every Major Phase Must Be Tested

Each phase should end with:

```text
Implementation
     ↓
Unit Tests
     ↓
Integration Tests
     ↓
Manual Verification
     ↓
Architecture Notes
```

---

# 13. Current Project Status

Last updated:

```text
2026-09-10
```

Current phase:

```text
Phase 1 — Monorepo + Authentication + Database
```

Current progress:

* [x] Project directory created
* [x] Git repository initialized
* [x] `.gitignore`
* [x] pnpm initialized
* [x] Root `package.json`
* [x] `pnpm-workspace.yaml`
* [x] Turborepo configuration
* [ ] Next.js application
* [ ] Tailwind
* [ ] shadcn/ui
* [ ] Supabase project
* [ ] Database
* [ ] Authentication
* [ ] Protected dashboard
* [ ] RLS
* [ ] Tests

---

# 14. Repository Structure

Current target:

```text
codedeply/
│
├── apps/
│   ├── web/
│   └── worker/              # Future
│
├── packages/
│   ├── ui/
│   ├── database/
│   ├── config/
│   └── types/
│
├── docs/
│   ├── PDR.md
│   ├── architecture.md
│   └── decisions/
│
├── supabase/
│   ├── migrations/
│   └── seed.sql
│
├── .git/
├── .gitignore
├── README.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

---

# 15. Important Commands

Install dependencies:

```bash
pnpm install
```

Run development:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

Type check:

```bash
pnpm typecheck
```

Format:

```bash
pnpm format
```

Check Turbo:

```bash
pnpm turbo --version
```

---

# 16. Development Rule

CodeDeploy should be built **one phase at a time**.

Do not skip directly from Phase 1 to Docker, Redis, workers, or deployment infrastructure.

For every phase:

```text
1. Architecture
2. WHY
3. File structure
4. Implementation
5. Communication between components
6. Tests
7. Verification
8. Documentation
9. Next phase
```

The goal is not simply to finish CodeDeploy.

The goal is to understand **why every component exists and how the entire system communicates**.

---

# 17. Final Target Architecture

The long-term architecture is:

```text
                           ┌───────────────┐
                           │    GitHub     │
                           └───────┬───────┘
                                   │
                                Webhook
                                   │
                                   ▼
┌──────────┐                 ┌───────────────┐
│ Browser  │ ──────────────► │    Next.js    │
└──────────┘                 └───────┬───────┘
                                     │
                       ┌─────────────┼─────────────┐
                       │             │             │
                       ▼             ▼             ▼
                 ┌──────────┐ ┌───────────┐ ┌───────────┐
                 │   Auth   │ │ PostgreSQL │ │ GitHub API│
                 └──────────┘ └───────────┘ └───────────┘
                                     │
                                     ▼
                                ┌─────────┐
                                │  Queue  │
                                └────┬────┘
                                     │
                           ┌─────────┴─────────┐
                           ▼                   ▼
                      ┌─────────┐         ┌─────────┐
                      │ Worker  │         │ Worker  │
                      └────┬────┘         └────┬────┘
                           │                   │
                           └─────────┬─────────┘
                                     ▼
                                  Docker
                                     │
                                  Build
                                     │
                                  Artifact
                                     │
                                  Runtime
                                     │
                                  Live URL

```



This is the destination.

The implementation will grow toward it incrementally.