---
title: "Food Delivery Time Prediction on AWS"
description: "A complete ML workflow for predicting food delivery times, deployed on AWS with CI/CD."
tags: ["FastAPI", "LightGBM", "AWS", "Docker", "MLOps"]
link: "https://github.com/AbdurRahman22224/swiggy-del-time-predn"
github: "https://github.com/AbdurRahman22224/swiggy-del-time-predn"
featured: true
---

## Overview

Built a FastAPI-based food delivery time prediction system using LightGBM, with a complete ML workflow incorporating DVC and MLflow for data/model versioning, seamlessly integrated with AWS S3.

## Key Features

- **Model Deployment:** Created a Dockerfile and pushed the container image to the Elastic Container Registry (ECR) for deployment.
- **Scalability:** Deployed the service on AWS using Auto Scaling Groups (ASG) with EC2 instances behind an Application Load Balancer (ALB) to ensure scalability and high availability.
- **CI/CD:** Automated CI/CD pipeline using GitHub Actions and CodeDeploy, and monitored deployments with CloudWatch.
