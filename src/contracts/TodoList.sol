pragma solidity ^0.5.0;

contract TodoList {
	// Count total number of tasks
  uint public taskCount = 0;

	// Custom data type
	struct Task {
		uint id; //id of task
		string content; //content of the task
		bool completed; //Check whether task is done or not(true/false)
	}

	// Mapping is similar to an associative array
	// First parameter is the key's data type (uint), second parameter is the struct defined above
	// More like tasks[uint] = Task
	mapping(uint => Task) public tasks;

	// create an event to be emitted to the smart contract/frontend
	event TaskCreated(
		uint id,
		string content,
		bool completed
	);
	

	// The constructor function runs whenever the smart contract is called
	constructor() public {
		createTask("todo blockchain app");
	}

	function createTask(string memory _content) public {
		//increment taskCount when a new task is created
		taskCount++;
		// Add a task to the tasks associative array
		tasks[taskCount] = Task(taskCount, _content, false);

		// Emit the event to the smart contract/frontend
		emit TaskCreated(taskCount, _content, false);
	}

	function taskCompleted(uint _id) public {
		// Get the task from the tasks mapping
		Task memory _task = tasks[_id];
		// Change the state of the completed task
		_task.completed = !_task.completed;
		// redefine the task
		tasks[_id] = _task;
	}
	
}