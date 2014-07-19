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
Feature: 管理任务
	Description
		In order to 保证项目进度
		As a Scrum Master
		I want to 记录任务，搜索未完成任务
	Considerations
		在多项目情况

Scenario: 有未完成任务
    Given Sprint 开始日期是 2014-05-23
	Given Backlog 有 任务:
	    | name    | status |
		| Task123 | TODO   |
		| TaskAB  | TODO   |
	And 任务的内容是
	"""
	   { "detail" : "作为消费者，我要快速商品计算总价" ,
	     "comments" : [
	         { "line" : "应该可选不同货币" } ,
	         { "line" : "总价必须两位数" }
	     ]
	   }  
	"""
	When 我完成:
	    | name    | status | date       |
		| Task123 | DONE   | 2014-05-26 |
	Then 未完成任务是:
	    | name    | 
	    | TaskAB  |
