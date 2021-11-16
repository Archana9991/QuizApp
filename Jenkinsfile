// pipeline {
//   tools {
//     nodejs 'Node17'
//   }
//     agent any
 

  
//     stages {
//        stage('batchscript') {
//    steps{
//       bat 'start cmd.exe /c C:\\Windows\\System32\\cmd.exe'\
//    }
//        }
         
//         stage('Check version') {
//             steps {
//                 echo 'Checking..'
//                 bat 'npm --version'
//             }
// //           post{ 
// //           success{
// //              slackSend message : 'Successfully checked'
       
// //             }
// //           failure {
// //            slackSend message : 'Checking failed'
// //         }
// //         }
//         }
//         stage('Install dependencies') {
//             steps {
//                 echo 'Install deps..'
//                 bat 'npm install'
//             }
// //           post{ 
// //           success{
// //              slackSend message : 'Successfully installed'
       
// //             }
// //           failure {
// //            slackSend message : 'Installation failed'
// //         }
// //         }
          
//         }
//         stage('Test') {
//             steps {
//                 echo 'Testing..'
//                 bat 'npm test'
//             }
// //           post{ 
// //           success{
// //              slackSend message : 'Successfully tested'
       
// //             }
// //           failure {
// //            slackSend message : 'Testing failed'
// //         }
// //         }
//         }
//         stage('Package') {
//             steps {
//                 echo 'npm build'
//             }
// //           post{ 
// //           success{
// //              slackSend message : 'Successfully build'
       
// //             }
// //           failure {
// //            slackSend message : 'Building failed'
// //         }
// //         }
//         }
//     }

// }     

pipeline {

  tools {
    nodejs 'Node17'
  }
    agent any
    stages {
      stage('build') {
      cmd_exec('echo "Buils starting..."')
      cmd_exec('echo "dir /a /b"')
}

def cmd_exec(command) {
    return bat(returnStdout: true, script: "${command}").trim()
}
    }
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

        stage("Deploy to AWS"){
            steps{
                 withAWS(credentials:'puneetawscred', region:'us-east-1') {
                     s3Upload(workingDir:'dist/my-workout-app', includePathPattern:'**/*', bucket:'my-jenkinsangular1', path:'')
            }
            }
            post {
                success{
                    bat 'echo "Uploaded to AWS"'
                }
                failure{
                    bat 'echo "failure"'
                }
            }
        
        }
    }
}
