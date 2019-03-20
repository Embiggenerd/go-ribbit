pipeline {
    agent {
        docker { image 'node:11-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}