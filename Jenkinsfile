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
      bat 'if exist playwright-report (dir playwright-report) else (echo "playwright-report NOT FOUND")'
      bat 'if exist playwright-report\\assets (dir playwright-report\\assets) else (echo "assets NOT FOUND")'
    }
  }
}


  }  // ✅ closes stages

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true

      publishHTML(target: [
        reportDir: 'Playwright-Automation/playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: true
      ])
    }
  }
}
