// Define the AngularJS module and controller
angular.module('todoApp', [])
.controller('TodoController', function($scope) {
    $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({ text: $scope.newTask, disabled: false });
            $scope.newTask = '';
            $scope.saveTasks();
        }
    };

    $scope.deleteAllTasks = function() {
        $scope.tasks = [];
        $scope.saveTasks();
    };

    $scope.remainingCount = function() {
        return $scope.tasks.filter(task => !task.disabled).length;
    };

    $scope.editTask = function(index) {
        const updatedTask = prompt("Edit Task:", $scope.tasks[index].text);
        if (updatedTask !== null) {
            $scope.tasks[index].text = updatedTask;
            $scope.saveTasks();
        }
    };

    $scope.saveTasks = function() {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };
});