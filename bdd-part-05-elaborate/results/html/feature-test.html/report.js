$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BacklogManagement.feature");
formatter.feature({
  "id": "管理任务",
  "description": "Description\nIn order to 保证项目进度\nAs a Scrum Master\nI want to 记录任务，搜索未完成任务\nConsiderations\n在多项目情况",
  "name": "管理任务",
  "keyword": "Feature",
  "line": 26,
  "comments": [
    {
      "value": "#",
      "line": 1
    },
    {
      "value": "#  Copyright (c) 2014  Ng Pan Wei",
      "line": 2
    },
    {
      "value": "#",
      "line": 3
    },
    {
      "value": "#  Permission is hereby granted, free of charge, to any person",
      "line": 4
    },
    {
      "value": "#  obtaining a copy of this software and associated documentation files",
      "line": 5
    },
    {
      "value": "#  (the \"Software\"), to deal in the Software without restriction,",
      "line": 6
    },
    {
      "value": "#  including without limitation the rights to use, copy, modify, merge,",
      "line": 7
    },
    {
      "value": "#  publish, distribute, sublicense, and/or sell copies of the Software,",
      "line": 8
    },
    {
      "value": "#  and to permit persons to whom the Software is furnished to do so,",
      "line": 9
    },
    {
      "value": "#  subject to the following conditions:",
      "line": 10
    },
    {
      "value": "#",
      "line": 11
    },
    {
      "value": "#  The above copyright notice and this permission notice shall be",
      "line": 12
    },
    {
      "value": "#  included in all copies or substantial portions of the Software.",
      "line": 13
    },
    {
      "value": "#",
      "line": 14
    },
    {
      "value": "#  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
      "line": 15
    },
    {
      "value": "#  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF",
      "line": 16
    },
    {
      "value": "#  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
      "line": 17
    },
    {
      "value": "#  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS",
      "line": 18
    },
    {
      "value": "#  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN",
      "line": 19
    },
    {
      "value": "#  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN",
      "line": 20
    },
    {
      "value": "#  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",
      "line": 21
    },
    {
      "value": "#  SOFTWARE.",
      "line": 22
    },
    {
      "value": "#",
      "line": 23
    },
    {
      "value": "# encoding:utf-8",
      "line": 24
    },
    {
      "value": "#",
      "line": 25
    }
  ]
});
formatter.before({
  "duration": 252000,
  "status": "passed"
});
formatter.scenario({
  "id": "管理任务;有未完成任务",
  "description": "",
  "name": "有未完成任务",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "Sprint 开始日期是 2014-05-23",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "Backlog 有 任务:",
  "keyword": "Given ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "name",
        "status"
      ],
      "line": 37
    },
    {
      "cells": [
        "Task123",
        "TODO"
      ],
      "line": 38
    },
    {
      "cells": [
        "TaskAB",
        "TODO"
      ],
      "line": 39
    }
  ]
});
formatter.step({
  "name": "任务的内容是",
  "keyword": "And ",
  "line": 40,
  "doc_string": {
    "value": "   { \"detail\" : \"作为消费者，我要快速商品计算总价\" ,\n     \"comments\" : [\n         { \"line\" : \"应该可选不同货币\" } ,\n         { \"line\" : \"总价必须两位数\" }\n     ]\n   }  ",
    "line": 41,
    "content_type": ""
  }
});
formatter.step({
  "name": "我完成:",
  "keyword": "When ",
  "line": 49,
  "rows": [
    {
      "cells": [
        "name",
        "status",
        "date"
      ],
      "line": 50
    },
    {
      "cells": [
        "Task123",
        "DONE",
        "2014-05-26"
      ],
      "line": 51
    }
  ]
});
formatter.step({
  "name": "未完成任务是:",
  "keyword": "Then ",
  "line": 52,
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 53
    },
    {
      "cells": [
        "TaskAB"
      ],
      "line": 54
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "2014-05-23",
      "offset": 13
    }
  ],
  "location": "BacklogStepDefs.sprint_开始日期是(Date)"
});
formatter.result({
  "duration": 163519000,
  "status": "passed"
});
formatter.match({
  "location": "BacklogStepDefs.backlog_有_任务(TaskDef\u003e)"
});
formatter.result({
  "duration": 30618000,
  "status": "passed"
});
formatter.match({
  "location": "BacklogStepDefs.任务_的内容是(String)"
});
formatter.result({
  "duration": 8603000,
  "status": "failed",
  "error_message": "java.lang.AssertionError: expected null, but was:\u003c{\"detail\":\"作为消费者，我要快速商品计算总价\",\"comments\":[{\"line\":\"应该可选不同货币\"},{\"line\":\"总价必须两位数\"}]}\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotNull(Assert.java:664)\n\tat org.junit.Assert.assertNull(Assert.java:646)\n\tat org.junit.Assert.assertNull(Assert.java:656)\n\tat ngpanwei.bdd.stepdefs.BacklogStepDefs.任务_的内容是(BacklogStepDefs.java:72)\n\tat ✽.And 任务的内容是(BacklogManagement.feature:40)\n"
});
formatter.match({
  "location": "BacklogStepDefs.我完成(TaskDef\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BacklogStepDefs.未完成任务是(TaskDef\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("BacklogReporting.feature");
formatter.feature({
  "id": "任务报告",
  "description": "Description\nIn order to 理解项目进度\nAs a Scrum Master\nI want to 查看任务报告\nConsiderations\n不同报告类型",
  "name": "任务报告",
  "keyword": "Feature",
  "line": 26,
  "comments": [
    {
      "value": "#",
      "line": 1
    },
    {
      "value": "#  Copyright (c) 2014  Ng Pan Wei",
      "line": 2
    },
    {
      "value": "#",
      "line": 3
    },
    {
      "value": "#  Permission is hereby granted, free of charge, to any person",
      "line": 4
    },
    {
      "value": "#  obtaining a copy of this software and associated documentation files",
      "line": 5
    },
    {
      "value": "#  (the \"Software\"), to deal in the Software without restriction,",
      "line": 6
    },
    {
      "value": "#  including without limitation the rights to use, copy, modify, merge,",
      "line": 7
    },
    {
      "value": "#  publish, distribute, sublicense, and/or sell copies of the Software,",
      "line": 8
    },
    {
      "value": "#  and to permit persons to whom the Software is furnished to do so,",
      "line": 9
    },
    {
      "value": "#  subject to the following conditions:",
      "line": 10
    },
    {
      "value": "#",
      "line": 11
    },
    {
      "value": "#  The above copyright notice and this permission notice shall be",
      "line": 12
    },
    {
      "value": "#  included in all copies or substantial portions of the Software.",
      "line": 13
    },
    {
      "value": "#",
      "line": 14
    },
    {
      "value": "#  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
      "line": 15
    },
    {
      "value": "#  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF",
      "line": 16
    },
    {
      "value": "#  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
      "line": 17
    },
    {
      "value": "#  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS",
      "line": 18
    },
    {
      "value": "#  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN",
      "line": 19
    },
    {
      "value": "#  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN",
      "line": 20
    },
    {
      "value": "#  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE",
      "line": 21
    },
    {
      "value": "#  SOFTWARE.",
      "line": 22
    },
    {
      "value": "#",
      "line": 23
    },
    {
      "value": "# encoding:utf-8",
      "line": 24
    },
    {
      "value": "#",
      "line": 25
    }
  ]
});
formatter.before({
  "duration": 131000,
  "status": "passed"
});
formatter.scenario({
  "id": "任务报告;生成任务报告",
  "description": "",
  "name": "生成任务报告",
  "keyword": "Scenario",
  "line": 34,
  "type": "scenario"
});
formatter.step({
  "name": "Sprint 开始日期是 2014-05-23",
  "keyword": "Given ",
  "line": 35
});
formatter.step({
  "name": "Backlog 有 任务:",
  "keyword": "Given ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "name",
        "status"
      ],
      "line": 37
    },
    {
      "cells": [
        "Task123",
        "TODO"
      ],
      "line": 38
    },
    {
      "cells": [
        "TaskAB",
        "TODO"
      ],
      "line": 39
    }
  ]
});
formatter.step({
  "name": "建立报告 \"总结报告\" 有 \"2\" 任务",
  "keyword": "Then ",
  "line": 40
});
formatter.match({
  "arguments": [
    {
      "val": "2014-05-23",
      "offset": 13
    }
  ],
  "location": "BacklogStepDefs.sprint_开始日期是(Date)"
});
formatter.result({
  "duration": 459000,
  "status": "passed"
});
formatter.match({
  "location": "BacklogStepDefs.backlog_有_任务(TaskDef\u003e)"
});
formatter.result({
  "duration": 801000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.scenario({
  "id": "任务报告;生成未完成任务报告",
  "description": "",
  "name": "生成未完成任务报告",
  "keyword": "Scenario",
  "line": 42,
  "type": "scenario"
});
});