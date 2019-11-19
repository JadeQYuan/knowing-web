pipeline {
    agent {
        docker {
            image 'node:13-alpine'
            args '-p 3000:3000 -v /opt/knowing/knowing-web:/opt/knowing/knowing-web'
        }
    }

    stages {
        stage('Package') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Publish') {
            steps {
                sh 'cp -rf ./dist/* /opt/knowing/knowing-web'
            }
        }
    }
}
