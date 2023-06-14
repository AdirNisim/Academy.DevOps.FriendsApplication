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
                sh "git ls-tree --name-only $GIT_BRANCH"
            }
        }
        stage('Container Built') {
            steps {
                sh 'pwsh --version'
            }
        }
    }
}