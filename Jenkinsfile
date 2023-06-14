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
              pwsh(script: 'Write-Outpout "Hello Dima"')   
              pwsh(script: 'docker images -a')
            }
        }
    }
}