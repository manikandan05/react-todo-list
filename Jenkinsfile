node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      def dockerHome = tool 'myDocker'
      env.PATH = "${dockerHome}/bin:${env.PATH}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t react-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'main'){
        sh 'docker build -t react-todo-list --no-cache .'
        sh 'docker tag react-todo-list localhost:5000/react-todo-list'
        sh 'docker push localhost:5000/react-todo-list'
        sh 'docker rmi -f react-todo-list localhost:5000/react-todo-list'
      }
    }
  }
  catch (err) {
    throw err
  }
}