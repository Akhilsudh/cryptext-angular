pipeline {
  agent any
  environment {
    FIREBASE_TOKEN = credentials('firebase-token')
  }
  stages {
    stage('NPM Install Stage') {
      steps { sh 'npm install' }
    }
    stage('Build Stage') {
      steps { sh 'npm run-script build' }
    }
    stage('Firebase Deploy Stage') {
      steps { sh 'echo $FIREBASE_TOKEN' }
    }
  }
}