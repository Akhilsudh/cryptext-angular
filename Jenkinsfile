pipeline {
  agent any
  environment {
    FIREBASE_TOKEN = credentials('firebase-token')
    FIREBASE_PROJECT_ID = credentials('firebase-project-id')
  }
  stages {
    stage('NPM Install Stage') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test Stage') {
      steps {
        sh 'ng test --watch=false'
      }
    }
    stage('Build Stage') {
      steps {
        sh 'ng build --prod'
      }
    }
    stage('Firebase Deploy Stage') {
      steps {
        sh 'firebase deploy --token $FIREBASE_TOKEN --project $FIREBASE_PROJECT_ID'
      }
    }
  }
}