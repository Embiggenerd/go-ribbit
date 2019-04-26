// pipeline {
//   agent any
//   // agent {
//   //   docker {
//   //     image 'cypress/base:10'
//   //   }
  
//   stages {
//     stage('build'){
//       steps {
//         echo "Building cypress on jenkins"
//         dir("e2e"){
//           sh 'pwd'
//           // sh 'npm ci'
//           // sh 'npm run cy:verify'
//           sh "cd ../../../root"
//         }
//       }
//     }
//     stage('development'){
//       when {
//         branch 'dev'
//       }
//       steps {
//         echo 'run integration tests'
//       }
//     }
//     stage('staging'){
//       when {
//         branch 'stage'
//       }
      
//       steps {
//         echo 'Deploying to staging server.'
//         sh 'pwd'
//         sh 'whoami'
//         sh 'cat /root/.ssh/config'
        
//         // sh 'su - jenkins && ssh jenkins-stage "pwd"'
//         // sh 'ssh goribbit_stage "cd goribbit" ;\
//         //       docker-compose --file docker-compose-prod.yml down  ;\ 
//         //       git checkout prod ;\
//         //       git pull ;\
//         //       docker-compose --file docker-compose-prod.yml up -V"'
              
//         // echo 'run cypress tests on staging server'
//         // sh 'cypress run --env server=34.195.46.184'
//       }
//     }
//     // stage('production'){
//     //   when {
//     //     branch 'prod'
//     //   }
//     //   steps {
//     //     {
//     //       echo 'deploy to production server'
//     //       echo 'run cypress tests'
//     //       sh 'cypress run --env server=AWS_PROD_EC2'
//     //     }
//     //   }
//     // }
//   }
// }

pipeline {
  agent any
  // agent {
  //   docker {
  //     image 'cypress/base:10'
  //   }
  
  stages {  
    
    stage('development'){
      when {
        branch 'dev'
      }
      steps {
        echo 'run integration/unit tests'
        sh 'pwd'
        sh 'ls -la'
        echo 'reading jenkins file from dev branch'
      }
    }
    stage('deploy to stage'){
      when {
        branch 'stage'
      }
      // agent {
      //   docker {
      //     image 'cypress/base:10'
      //   }
      // }      
      steps {
          echo 'Deploying to staging server.'
          sh 'pwd'
          sh 'whoami'
          sh 'cat /root/.ssh/config'
          sh 'ssh -tt -v jenkins-stage "sh ~/go-ribbit/stage_reup.sh"'
          sh 'pwd'
          sh 'whoami' 
      
      
        // sh 'su - jenkins && ssh jenkins-stage "pwd"'
        // sh 'ssh goribbit_stage "cd goribbit" ;\
        //       docker-compose --file docker-compose-prod.yml down  ;\ 
        //       git checkout prod ;\
        //       git pull ;\
        //       docker-compose --file docker-compose-prod.yml up -V"'
              
        // echo 'run cypress tests on staging server'
        // sh 'cypress run --env server=34.195.46.184'
      }

    }
    stage('staging test'){
      when {
        branch 'stage'
      }
      agent {
            docker {
              image 'cypress/base:10'
            }
          }
      steps{
          dir("e2e/cypress"){
          sh 'npm ci'
          sh 'npm run cy:verify'
          echo 'runing cypress tests'
          sh 'npm run cy:run:stage'
        }      
    }
    
    // stage('production'){
    //   when {
    //     branch 'prod'
    //   }
    //   steps {
    //     {
    //       echo 'deploy to production server'
    //       echo 'run cypress tests'
    //       sh 'cypress run --env server=AWS_PROD_EC2'
    //     }
    //   }
    // }
  }
}
}