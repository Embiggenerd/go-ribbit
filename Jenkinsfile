pipeline {
  agent any
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
      steps {
          echo 'Deploying to staging server.'
          sh 'pwd'
          sh 'whoami'
          sh 'cat /root/.ssh/config'
          sh 'ssh -tt -v jenkins-stage "sh ~/go-ribbit/stage_reup.sh"'
          sh 'pwd'
          sh 'whoami' 
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
  }
}
}