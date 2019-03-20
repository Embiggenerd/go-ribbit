pipeline {
    agent { docker { image 'node:alpine-11' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}