// pipeline {
//   tools {
//     nodejs 'Node 16'
//   }
//     agent any
//     stages {
//         stage('Check version') {
//             steps {
//                 echo 'Checking..'
//                 bat 'npm --version'
//             }
         
//         }
//         stage('Install dependencies') {
//             steps {
//                 echo 'Install deps..'
//                 bat 'npm install'
//             }
          
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing..'
//                 bat 'npm test'
//             }
          
//         }
//         stage('Package') {
//             steps {
//                 echo 'npm build'
//             }
          
//         }
//     }
// }
    

pipeline {

  tools {
    nodejs 'Node 16'
  }
    agent any
    stages {
        stage('Check version') {
            steps {
                echo 'Cleaning..'
               
            }
        }
        stage('Install dependencies') {
            steps {
                echo 'Install deps..'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                bat 'npm test'
            }
        }
        stage('Package') {
            steps {
                echo 'npm run build'
            }
        }
    }
}
