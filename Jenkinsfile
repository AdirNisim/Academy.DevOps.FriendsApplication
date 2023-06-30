pipeline {
    agent any

    stages {
        stage('Verify Branch') {
            steps {
                echo "$GIT_BRANCH"
            }
        }
        stage('Deploy App') {
            steps {
                script {
                    // Run Docker Compose Up
                    dockerComposeUp()
                }
            }
        }
    }
}