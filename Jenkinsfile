pipeline {
  agent any

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        bat 'node -v'
        bat 'npm -v'
        bat 'npm ci'
      }
    }

    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install --with-deps'
      }
    }

    stage('Run tests (Chromium)') {
      steps {
        bat 'npx playwright test --project=chromium --reporter=html'
      }
    }

    stage('List report files') {
  steps {
    dir('Playwright-Automation') {
      bat 'dir playwright-report'
      bat 'dir playwright-report\\assets'
    }
  }
}

  }  // ✅ closes stages

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true

      publishHTML(target: [
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: true
      ])
    }
  }
}
