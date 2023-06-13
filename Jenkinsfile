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
                    powershell """
                    git fetch origin main
                    git checkout origin/main origin/main/docker-compose.yml
                    docker-compose down
                    docker-compose up -d
                    """
                }
            }
        }
    } 
} 