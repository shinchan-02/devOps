import { Experience, Project, Service, SkillCategory } from './type';
import { 
  Cloud, 
  Server, 
  Shield, 
  Terminal, 
  BarChart3, 
  Zap,
  Database,
  Repeat
} from 'lucide-react';

export const CONTACT_INFO = {
  name: "Satyam Agrawal",
  role: "Sr. SRE / DevOps Engineer",
  email: "agarwalsatyam027@gmail.com",
  phone: "+918058083031",
  linkedin: "https://linkedin.com/in/satyam-a-a36b3217b",
  medium: "https://medium.com/@stym_A",
  location: "New Delhi, India"
};

export const SERVICES: Service[] = [
  {
    id: 'cloud-arch',
    title: 'Cloud Architecture',
    description: 'Migrating legacy monolithic apps to microservices on AWS/GCP Kubernetes clusters. Designing resilient, scalable infrastructure.',
    icon: Cloud
  },
  {
    id: 'cost-opt',
    title: 'Cost Optimization',
    description: 'Reducing cloud bills by implementing Spot Instances, right-sizing resources, and automated cleanup scripts. Proven track record of huge savings.',
    icon: BarChart3
  },
  {
    id: 'cicd',
    title: 'CI/CD Automation',
    description: 'Building "Click-to-Deploy" pipelines using Jenkins, GitLab CI, and GitHub Actions. Integrating automated testing and security scans.',
    icon: Repeat
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Setting up full-stack observability with Prometheus, Grafana, ELK, and OpenSearch to ensure 99.99% system reliability.',
    icon: Terminal
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'fleetx',
    company: 'Fleetx Technologies',
    role: 'Sr. SRE/DevOps Engineer',
    period: '05/2024 - Present',
    location: 'Gurugram, Haryana',
    achievements: [
      'Migrated self-hosted applications from EC2 to Kubernetes (KOPS/EKS) using Helm across all environments and dockerized all applications.',
      'Managed CI/CD pipelines using Ansible and Jenkins with integrated Playwright automation.',
      'Introduced and managed self-hosted Rundeck and Pritunl VPN for infrastructure automation and secure access.',
      'Integrated OpenSearch with Fluentd and Fluent Bit for centralized logging and observability.',
      'Reduced infrastructure costs by optimizing resources, removing public access for most services, and streamlining debugging workflows.',
      'Managed self-hosted MySQL, successfully upgrading from 5.6 → 5.7 → 8.0 with zero downtime.',
      'Managed self-hosted Metabase, migrating from H2 to PostgreSQL for improved performance and reliability.',
      'Maintained self-hosted GitLab for version control and CI/CD integration.',
      'Implemented security pipelines using custom scripts and Cloudanix tool for compliance monitoring.',
      'Conducted POCs on Wazuh and Snort for intrusion detection and threat monitoring.',
      'Migrated infrastructure to Cloudflare for enhanced security and performance.',
      'Set up Teleport for secure SSH access management across all servers.'
    ]
  },
  {
    id: 'ontic',
    company: 'ONTIC TECHNOLOGIES',
    role: 'DevOps Engineer',
    period: '09/2023 - 04/2024',
    location: 'Noida, Uttar Pradesh',
    achievements: [
      'Deployed and managed self-hosted Kubernetes (K8s) clusters on GCP for high-availability workloads.',
      'Migrated legacy services from VMs to Kubernetes, dockerizing applications to improve scalability and resource utilization.',
      'Designed and implemented Helm charts and Jenkins CI/CD pipelines, streamlining deployment workflows.',
      'Diagnosed and resolved infrastructure bottlenecks, optimizing performance and enforcing security best practices.'
    ]
  },
  {
    id: 'nykaa',
    company: 'Nykaa (FSN E-Commerce)',
    role: 'DevOps Engineer',
    period: '09/2021 - 09/2023',
    location: 'Gurugram, Haryana',
    achievements: [
      'Led automation initiatives using Shell and Python, reducing operational costs and manual intervention.',
      'Built a complete automation tool to streamline employee onboarding with auto-provisioning of VPN, Jenkins, Rundeck, GitHub, and AWS access via Jira integration.',
      'Automated real-time access revocation on employee exit, triggered automatically upon Gmail deactivation.',
      'Initiated EKS adoption and managed AWS services including IAM, EC2, Redshift, Route53, S3, and ECR.',
      'Optimized ECS infrastructure costs using Spot instances and Lambda-based automation.',
      'Customized Kong API Gateway behavior using Lua scripts for enhanced traffic management and security.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cloud & Infra",
    skills: ["AWS", "GCP", "Terraform", "CloudFormation", "Docker", "Kubernetes", "ECS", "KOPS", "EKS"]
  },
  {
    name: "CI/CD & Automation",
    skills: ["Jenkins", "GitLab CI", "Helm", "Ansible", "Rundeck", "Jira", "Playwright"]
  },
  {
    name: "Observability",
    skills: ["Prometheus", "Grafana", "Loki", "ELK Stack", "OpenSearch", "Fluentd", "Fluent Bit"]
  },
  {
    name: "Security & Networking",
    skills: ["Wazuh", "Snort", "Teleport", "Pritunl VPN", "Cloudanix", "Cloudflare", "Kong", "Nginx"]
  },
  {
    name: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "Metabase", "GitLab", "S3", "ECR", "Redshift"]
  },
  {
    name: "Languages & Scripting",
    skills: ["Bash", "Python", "Lua", "Shell Scripting", "SQL"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'employee-automation',
    title: 'Employee Access Automation Platform',
    description: 'Built a comprehensive automation tool integrating Jira for employee onboarding/offboarding with auto-provisioning of VPN, Jenkins, Rundeck, GitHub, AWS access, and real-time revocation on Gmail deactivation.',
    tags: ['Python', 'Jira', 'Automation', 'AWS'],
    icon: Zap
  },
  {
    id: 'k8s-migration',
    title: 'Cloud-Native Migration to Kubernetes',
    description: 'Migrated 50+ legacy applications from EC2 to Kubernetes (KOPS/EKS) with complete dockerization, achieving 40% cost reduction and improved scalability across all environments.',
    tags: ['Kubernetes', 'Docker', 'Helm', 'AWS'],
    icon: Server
  },
  {
    id: 'security-mesh',
    title: 'Zero-Trust Security Infrastructure',
    description: 'Implemented end-to-end security framework with Teleport for SSH management, Pritunl VPN, Cloudanix compliance monitoring, and POCs on Wazuh and Snort for threat detection.',
    tags: ['Security', 'Teleport', 'Wazuh', 'Cloudflare'],
    icon: Shield
  },
  {
    id: 'log-platform',
    title: 'Centralized Observability Platform',
    description: 'Designed and deployed a scalable logging and monitoring solution using OpenSearch, Fluentd, Fluent Bit, Prometheus, and Grafana handling TBs of daily logs with real-time alerting.',
    tags: ['OpenSearch', 'Prometheus', 'Grafana', 'Observability'],
    icon: Database
  }
];
