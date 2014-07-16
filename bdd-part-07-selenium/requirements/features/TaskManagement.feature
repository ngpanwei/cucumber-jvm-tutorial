Feature: 保证任务的进度
	In order to 保证任务的进度
	As a Scrum Master
	I want to 查询未完成任务
Considerations
	不同类型的任务
	不同任务的优先级

Scenario: 团队有未完成任务
	Given 团队有任务 "TaskABC"
	Given 团队有任务 "Task123"
	When 团队完成 "TaskABC"
	Then 团队的未完成任务是 "Task123"
	
Scenario: 团队没有未完成任务
	Given 团队有任务 "TaskABC"
	When 团队完成 "TaskABC"
	Then 团队的未完成任务是 "无"

Scenario: 团队有一些高优先级任务没完成
	Given 团队有优先级 "高" 的任务 "TaskABC" 
	Given 团队有任务 "Task123"
	When 团队完成 "TaskABC"
	Then 团队的未完成 "高" 优先级 任务是 "无"


	