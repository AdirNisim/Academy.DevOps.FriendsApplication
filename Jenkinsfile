pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Verify Files in Branch') {
            steps {
              pwsh 'docker images -a'
            }
        }
    }
}