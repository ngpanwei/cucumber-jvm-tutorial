#
#  Copyright (c) 2014  Ng Pan Wei
#  
#  Permission is hereby granted, free of charge, to any person 
#  obtaining a copy of this software and associated documentation files 
#  (the "Software"), to deal in the Software without restriction, 
#  including without limitation the rights to use, copy, modify, merge, 
#  publish, distribute, sublicense, and/or sell copies of the Software, 
#  and to permit persons to whom the Software is furnished to do so, 
#  subject to the following conditions: 
#  
#  The above copyright notice and this permission notice shall be 
#  included in all copies or substantial portions of the Software. 
#  
#  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
#  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
#  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
#  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
#  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN 
#  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
#  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
#  SOFTWARE. 
# 
# encoding:utf-8
#
Feature: 任务报告
	Description
		In order to 理解项目进度
		As a Scrum Master
		I want to 查看任务报告
	Considerations
		不同报告类型

Scenario: 生成任务报告
    Given Sprint 开始日期是 2014-05-23
	Given Backlog 有 任务:
	    | name    | status |
		| Task123 | TODO   |
		| TaskAB  | TODO   |
	Then 建立报告 "总结报告" 有 "2" 任务

Scenario: 生成未完成任务报告
	