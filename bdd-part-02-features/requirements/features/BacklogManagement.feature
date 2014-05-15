Feature: 管理任务
	Description
		In order to 保证项目进度
		As a Scrum Master
		I want to 记录任务，搜索未完成任务
	Considerations
		在多项目情况
		import 大批量 Excel task list

Scenario: 有未完成任务
	Given Backlog 有 任务 "Task123"
	Given Backlog 有 任务 "TaskAB"
	When 我完成 "Task123"
	Then 未完成任务是 "TaskAB"

Scenario: 有些任务达到某个状态
