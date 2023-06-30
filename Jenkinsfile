pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }

        stage('Verify tooling') {
            steps {
                script {
                    sh '''
                    docker version
                    docker info
                    docker compose version
                    curl --version
                    jq --version
                    '''
                }
            }
        }
    }
}