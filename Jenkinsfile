pipeline {
  tools {
    nodejs 'Node 17'
  }
    agent any
    stages {
        stage('Check version') {
            steps {
                echo 'Checking..'
                sh 'npm --version'
            }
         
        }
        stage('Install dependencies') {
            steps {
                echo 'Install deps..'
                sh'npm install'
            }
          
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
          
        }
        stage('Package') {
            steps {
                echo 'npm build'
            }
          
        }
    }
}
    
