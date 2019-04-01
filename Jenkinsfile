pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }
  stages {
    stage('build'){
      steps {
        echo "Building cypress on jenkins"
        dir("e2e"){
          sh 'npm ci'
          sh 'npm run cy:verify'
        }
        
      }
    }
    stage('development'){
      when {
        branch 'dev'
      }
      steps {
        echo 'run integration tests'
      }
    }
    stage('staging'){
      when {
        branch 'stage'
      }
      steps {
        echo 'Deploying to staging server.'
        sh 'ssh goribbit_stage "pwd"'
        // sh 'ssh goribbit_stage "cd goribbit" ;\
        //       docker-compose --file docker-compose-prod.yml down  ;\ 
        //       git checkout prod ;\
        //       git pull ;\
        //       docker-compose --file docker-compose-prod.yml up -V"'
              
        // echo 'run cypress tests on staging server'
        // sh 'cypress run --env server=34.195.46.184'
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