pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Container Built') {
            steps {
                script {
                    sh 'git fetch origin main'
                    sh 'git checkout origin/main docker-compose.yml'
                    sh 'kubectl apply -f docker-compose.yml'
                }
            }
        }
    }