pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('test') {
            steps {
                sh 'node --version'
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}